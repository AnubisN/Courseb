# Generated by Django 4.0 on 2021-12-21 01:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_blog_image_course_image_testimonial_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='faq',
            name='user',
        ),
    ]