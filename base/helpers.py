from django.core.mail import send_mail
from django.conf import settings
import uuid

def send_forget_password_mail(email,token):
    subject = 'Your forget password link'
    message = f'Hi, click on the link to reset your paassword `https://localhost:3000/changePassword/{token}/`'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)