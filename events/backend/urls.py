from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('profile/<int:user_id>/', views.profile, name='profile'),
    path('events/', views.event_list, name='events'),
    path('gallery/', views.gallery, name='gallery'),
]
