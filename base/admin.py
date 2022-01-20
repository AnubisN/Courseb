from django.contrib import admin
from .models import Course, Blog, Review, FAQ, Testimonial, Gallery, User
from .forms import UserCreationForm
from django.contrib.auth.admin import UserAdmin

class UserAdmin(UserAdmin):
    model = User
    add_form = UserCreationForm

    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'User role',
            {
                'fields': (
                    'profilePicture',
                    'phoneNumber',
                    'address',
                    'job',
                    'isStudent',
                    'isInstructor'
                )
            }
        )
    )

# Register your models here.

admin.site.register(Course)
admin.site.register(Blog)
admin.site.register(Review)
admin.site.register(FAQ)
admin.site.register(Testimonial)
admin.site.register(Gallery)
admin.site.register(User, UserAdmin)