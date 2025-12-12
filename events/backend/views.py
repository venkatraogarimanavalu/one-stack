from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
import json


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


@csrf_exempt
def register_user(request):
    if request.method == "POST":
        print("Register User Called")

        data = json.loads(request.body)
        print(data)

        # you want username = name
        username = data.get("name")
        password = data.get("password")
        email = data.get("email")

        if not username or not password:
            return JsonResponse({"error": "Missing required fields"}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already exists"}, status=400)

        # Create Django User
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email
        )

        # Create profile (if you have model)
        UserProfile.objects.create(
            user=user,
            name=data.get("name"),
            father=data.get("father"),
            mother=data.get("mother"),
            surname=data.get("surname"),
            dob=data.get("dob"),
            gender=data.get("gender"),
            village=data.get("village"),
            phone=data.get("phone"),
        )

        return JsonResponse({"message": "User registered successfully"})

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)
        username = data.get("username")
        password = data.get("password")

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({"message": "Login successful", "username": user.username})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=400)

@csrf_exempt
def logout_user(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"message": "Logged out successfully"})
    return JsonResponse({"error": "Invalid request method"}, status=400)
