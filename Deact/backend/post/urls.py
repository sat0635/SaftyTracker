from django.urls import path

from . import views



urlpatterns = [
    path('insert/<userid>/<session>/<imageurl>/', views.insert_near_user),
    path('delete/<userid>/', views.delete_near_user),
    path('getNearUser/', views.get_near_user),
]
