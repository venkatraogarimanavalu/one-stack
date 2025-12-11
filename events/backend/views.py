from django.shortcuts import render
from .models import *
from .views import *
from django.http import JsonResponse

# Home API (can return welcome info)
def home(request):
    names = ["ganesh", "anusha", "sathwik", "manikanta", "chanti"]
    print(names)
    return JsonResponse({"names": names}, safe=False)
# Profile API for logged-in user
def profile(request, user_id):
    try:
        participant = Participant.objects.get(user_id=user_id)
        data = {
            "name": participant.name,
            "email": participant.email,
            "phone": participant.phone,
            "age_group": participant.age_group.age_group if participant.age_group else None,
            "event": participant.event.title,
        }
        return JsonResponse(data)
    except Participant.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

# Events API
def event_list(request):
    events = Event.objects.all().order_by('-date')
    data = []
    for event in events:
        data.append({
            "id": event.id,
            "title": event.title,
            "description": event.description,
            "date": event.date,
            "time": event.time,
            "status": event.status,
        })
    return JsonResponse(data, safe=False)

# Gallery API (for now can be static images or empty list)
def gallery(request):
    images = [
        {"id": 1, "url": "/media/gallery/image1.jpg"},
        {"id": 2, "url": "/media/gallery/image2.jpg"},
    ]
    return JsonResponse(images, safe=False)


# Create your views here.
