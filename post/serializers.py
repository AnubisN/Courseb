from rest_framework import serializers
from .models import CoursePost
from base.serializers import CourseOnlySerializer

class CoursePostSerializer(serializers.ModelSerializer):
    course = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = CoursePost
        fields = '__all__'

    def get_course(self, obj):
        serializer = CourseOnlySerializer(obj.course, many=False)
        return serializer.data
