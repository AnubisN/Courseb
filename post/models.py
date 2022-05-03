from pyexpat import model
from django.db import models
from base.models import Course

# Create your models here.
class CoursePost(models.Model):
    name = models.CharField(max_length=100,blank=False, null=True)
    description = models.TextField(blank=False, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    type = models.CharField(max_length=100,blank=True,null=True)
    createdAt = models.DateField(auto_now=True)

    def __str__(self):
        return self.name  

