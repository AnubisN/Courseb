from django.urls import path
from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/profile/', views.getUserProfile, name="userProfile"),
    path('users/profileDetails/<str:pk>/', views.getUserDetails, name="userDetails"),
    path('users/update/<str:pk>/', views.updateUser, name="updateDetails"),
    path('users/updatePicture/<str:pk>/', views.updateUserImg, name="updateImg"),
    path('users/updatePassword/<str:pk>/', views.updateUserPassword, name="updatePassword"),
    path('courses/',views.getCourses, name="courses"),
    path('courses/<str:pk>', views.getCourse, name='course'),
    path('faqs/',views.getFAQs, name="faqs"),
    path('testimonials/',views.getTestimonials, name="testimonials"),
    path('blogs/',views.getBlogs, name="blogs"),
    path('blogs/<str:pk>/', views.getBlog, name="blog"),
    path('gallerys',views.getGallery, name='gallery')
]