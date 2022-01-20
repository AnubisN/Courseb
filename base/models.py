from email.policy import default
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from .imageCompression import compress_image


class Category(models.Model):
    _id = models.AutoField(primary_key=True,editable=False)
    name = models.CharField(max_length=200,null=True,blank=True)


# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=300, null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    image = models.ImageField(null=True, blank=True)
    skills = models.TextField(null=True, blank=True)
    requirements = models.TextField(null=True,blank=True)
    instructor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isAvailable = models.BooleanField(null=True,blank=True,default=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateField(auto_now=True)
    _id = models.AutoField(primary_key=True, editable=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=300, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True,blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Blog(models.Model):
    category = models.CharField(max_length=200, null=True,blank=True)
    name = models.CharField(max_length=350, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateField(auto_now=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class FAQ(models.Model):
    question = models.CharField(max_length=500, blank=True, null=True)
    answer = models.TextField(null=True,blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.question

class Testimonial(models.Model):
    image = models.ImageField(null=True, blank=True) 
    comment = models.TextField(null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    userName = models.CharField(max_length=200, blank=True, null=True)
    currentJob = models.CharField(max_length=200, blank=True, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.userName

class Gallery(models.Model):
    name = models.CharField(max_length=300, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        """
        Overriding save method to compress image before saving it
        """
        new_image = compress_image(self.image)
        self.image = new_image
        super().save(*args,**kwargs)

class User(AbstractUser):
    profilePicture = models.ImageField(null=True, blank=True, default="logo.png")
    phoneNumber = models.CharField(max_length=10,blank=True)
    address = models.CharField(max_length=100,blank=True)
    job = models.CharField(max_length=100,blank=True)
    isStudent = models.BooleanField(default=True)
    isInstructor = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        """
        Overriding save method to compress image before saving it
        """
        new_image = compress_image(self.profilePicture)
        self.image = new_image
        super().save(*args,**kwargs)
