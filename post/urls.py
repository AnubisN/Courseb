from django.urls import path
from . import views

urlpatterns = [
    path('coursePost/<str:pk>/', views.getPosts, name='coursePosts'),
]