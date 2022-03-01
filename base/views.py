from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import Blog, Course, FAQ, Gallery, Testimonial, User, EnrolledCourse, Review, Category
from .serializers import BlogSerializer, CourseSerializer, FAQSerializer, GallerySerializer, TestimonialSerializer, UserSerializer, UserSerializerWithToken, UserPasswordSerializer, EnrolledCourseSerializer, CategorySerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Create your views here.

@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            first_name=data['firstName'],
            last_name=data['lastName'],
            username = data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserDetails(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserImg(request):
    user = request.user
    serializer = UserSerializerWithToken(user,many=False)

    profilePicture = request.FILES['profilePicture']
    print(profilePicture)
    user.profilePicture = profilePicture
    user.save()
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request):
    user = request.user
    serializer = UserSerializerWithToken(user,many=False)

    data = request.data
    user.first_name = data['firstName']
    user.last_name = data['lastName']
    user.address = data['address']
    user.job = data['job']
    user.phoneNumber = data['phoneNumber']
    user.save()

    serializer = UserSerializerWithToken(user, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserPassword(request):
    user = request.user
    serializer = UserPasswordSerializer(user,many=False)
    data = request.data
    password = data['password']

    if check_password(password,user.password):
        user.set_password(data['newPassword'])
        user.save()
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    else:
        message = {'detail': 'Old password does not match'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getCourses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCourse(request, pk):
    course = Course.objects.get(_id=pk)
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getBlogs(request):
    blogs = Blog.objects.all().order_by('-createdAt')
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlog(request, pk):
    blog = Blog.objects.get(_id=pk)
    serializer = BlogSerializer(blog,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getGallery(request):
    gallery = Gallery.objects.all()
    serializer = GallerySerializer(gallery, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFAQs(request):
    faqs = FAQ.objects.all()
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTestimonials(request):
    testimonials = Testimonial.objects.all()
    serializer = TestimonialSerializer(testimonials, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getEnrolledCourses(request):
    user = request.user
    enrolledCourses = EnrolledCourse.objects.filter(user=user)
    courses = []
    for course in enrolledCourses:
        serializer = EnrolledCourseSerializer(course, many=False)
        courses.append(serializer.data)
    res = {"courses": courses}
    return Response(res, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateEnrolledCourses(request,pk):
    user = request.user
    course = Course.objects.get(_id=pk)
    enrolledCourse = EnrolledCourse.objects.create(
        user = user,
        course = course
    )
    enrolledCourses = EnrolledCourse.objects.filter(user=user)
    courses = []
    for course in enrolledCourses:
        serializer = EnrolledCourseSerializer(course, many=False)
        courses.append(serializer.data)
    res = {"courses": courses}
    return Response(res, status=status.HTTP_200_OK)

@api_view(['GET'])
def getCategories(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCourseReview(request, pk):
    user = request.user
    course = Course.objects.get(_id=pk)
    data = request.data

    #1 - Review already exists
    alreadyExists = course.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Sorry, you have already submitted a review for this course'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #3 - Create review
    else:
        name =    user.first_name + " " + user.last_name
        review = Review.objects.create(
            course = course,
            user = user,
            name = name,
            rating = data['rating'],
            comment = data['comment'],
        )

        reviews = course.review_set.all()
        course.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating
        
        course.rating = total / len(reviews)
        course.save()

        return Response({'detail':'Review was added'})
