from django.db import models
from datetime import datetime,date
from django.forms import ModelForm
from django.forms.models import model_to_dict
import os
from django.utils.timezone import now
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.utils.timezone import localtime
# os.system("tzutil /s \"Central Standard Time\"")
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True, null=True)
    father=models.CharField(max_length=100, blank=True, null=True)
    mother=models.CharField(max_length=100, blank=True, null=True)
    surname = models.CharField(max_length=100, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    village = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    authenticate = models.BooleanField(default=False, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.user.username


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=50, default='upcoming')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class pricemoney(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    position = models.CharField(max_length=50)
    amount = models.FloatField()

    def __str__(self):
        return f"{self.event.title} - {self.position} : {self.amount}"
    
class ageGroupList(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    age_group = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.event.title} - {self.age_group}"
    
class Participant(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    is_attended = models.BooleanField(default=False)
    age_group = models.ForeignKey('ageGroupList', on_delete=models.CASCADE, blank=True, null=True)
    date_registered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.event.title} ({self.participant_type})"
    
class EventCategory(models.Model):
    category = models.CharField(max_length=100)
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    judge = models.ForeignKey(User, on_delete=models.CASCADE)
    marks_range=models.FloatField()

    def __str__(self):
        return f"{self.event.title} - {self.category}"
    
class eventMarks(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    participant = models.ForeignKey('Participant', on_delete=models.CASCADE)
    category = models.ForeignKey('EventCategory', on_delete=models.CASCADE)
    marks = models.FloatField()
    remarks = models.TextField(blank=True, null=True)
    date_recorded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.participant.name} - {self.event.title} : {self.marks}"


class winnerList(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    participant = models.ForeignKey('Participant', on_delete=models.CASCADE)
    position = models.CharField(max_length=50)
    date_awarded = models.DateTimeField(auto_now_add=True)
    in_age_group = models.ForeignKey('ageGroupList', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f"{self.participant.name} - {self.event.title} : {self.position}"