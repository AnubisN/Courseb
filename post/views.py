from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import CoursePost
from .serializers import CoursePostSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getPosts(reqeust,pk):
    posts = CoursePost.objects.filter(course=pk).order_by('-createdAt')
    res = []
    print(posts)
    for post in posts:
        serializer = CoursePostSerializer(post, many=False)
        res.append(serializer.data)
    res = {"posts": res}
    return Response(res)