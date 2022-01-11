from django.urls import path
from . import views

urlpatterns = [
    path('courses/',views.getCourses, name="courses"),
    path('courses/<str:pk>', views.getCourse, name='course'),
    path('faqs/',views.getFAQs, name="faqs"),
    path('testimonials/',views.getTestimonials, name="testimonials"),
    path('blogs/',views.getBlogs, name="blogs"),
    path('blogs/<str:pk>/', views.getBlog, name="blog"),
    path('gallerys',views.getGallery, name='gallery')
]