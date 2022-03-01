from dataclasses import field
from unicodedata import category
from django.db.models import fields
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Blog, Course, FAQ, Gallery, Testimonial, User, EnrolledCourse, Review, Category

class CourseSerializer(serializers.ModelSerializer):
    instructor = serializers.SerializerMethodField(read_only=True)
    reviews = serializers.SerializerMethodField(read_only=True)
    category = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Course
        fields = '__all__'

    def get_instructor(self, obj):
        serializer = UserSerializer(obj.instructor, many=False)
        return serializer.data

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews,many=True)
        return serializer.data

    def get_category(self,obj):
        serializer = CategorySerializer(obj.category, many=False)
        return serializer.data
        
class CourseOnlySerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class UserPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']
    
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','username','_id','phoneNumber','job','address','email','name','isAdmin','profilePicture','first_name','last_name']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id','username','email','last_name','first_name','isAdmin','isStudent','token','profilePicture','address','job']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Blog
        fields = '__all__'

    def get_user(self, obj):
        serializer = UserSerializer(obj.user, many=False)
        return serializer.data

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
    
    def get_user(self, obj):
        serializer = UserSerializer(obj.user, many=False)
        return serializer.data

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class EnrolledCourseSerializer(serializers.ModelSerializer):
    course = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = EnrolledCourse
        fields = '__all__'

    def get_course(self,obj):
        course = obj.course
        serializer = CourseOnlySerializer(course, many=False)
        return serializer.data
