from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Blog, Course, FAQ, Gallery, Testimonial
from .serializers import BlogSerializer, CourseSerializer, FAQSerializer, GallerySerializer, TestimonialSerializer

# Create your views here.

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
    blogs = Blog.objects.all()
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
