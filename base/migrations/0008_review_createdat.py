# Generated by Django 4.0 on 2022-02-25 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_remove_review_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='createdAt',
            field=models.DateField(auto_now=True),
        ),
    ]
