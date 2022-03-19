from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/profile/', views.getUserProfile, name="userProfile"),
    path('users/profileDetails/', views.getUserDetails, name="userDetails"),
    path('users/update/', views.updateUser, name="updateDetails"),
    path('users/updatePicture/', views.updateUserImg, name="updateImg"),
    path('users/forgotPassword/',views.forgotPassword, name="forgotpassword"),
    path('users/updatePassword/', views.updateUserPassword, name="updatePassword"),
    path('users/changePassword/<str:token>/',views.changePassword, name="changePassword"),
    path('users/getEnrolledCourses/', views.getEnrolledCourses, name="enrolledCourses"),
    path('users/updateEnrolledCourses/<str:pk>/', views.updateEnrolledCourses, name="updateEnrolledCourses"),
    path('courses/',views.getCourses, name="courses"),
    path('courses/<str:pk>/', views.getCourse, name='course'),
    path('courseReview/<str:pk>/',views.createCourseReview, name='createReview'),
    path('faqs/',views.getFAQs, name="faqs"),
    path('testimonials/',views.getTestimonials, name="testimonials"),
    path('blogs/',views.getBlogs, name="blogs"),
    path('blogs/<str:pk>/', views.getBlog, name="blog"),
    path('gallerys/',views.getGallery, name='gallery'),
    path('category/',views.getCategories,name="category"),
    path('esewaPaymentSuccess/',views.esewaSuccesss ,name="esewa-success"),
    path('khaltiPaymentSuccess/',views.khaltiSuccess,name="khalti-success"),
    path('contactUs/',views.registerMessage,name="contactUs")
]