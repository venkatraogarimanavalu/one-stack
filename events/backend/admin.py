from django.contrib import admin

# Register your models here.
from .models import (
    UserProfile,
    Event,
    Participant,
    ageGroupList,
    pricemoney,
    EventCategory,
    eventMarks,
    winnerList
)

# Simple registration
admin.site.register(UserProfile)
admin.site.register(Event)
admin.site.register(Participant)
admin.site.register(ageGroupList)
admin.site.register(pricemoney)
admin.site.register(EventCategory)
admin.site.register(eventMarks)
admin.site.register(winnerList)
