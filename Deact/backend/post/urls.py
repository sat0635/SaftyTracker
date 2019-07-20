from django.urls import path

from . import views



urlpatterns = [
    path('insertstate/<userid>/<state>/', views.insert_state_user),
    path('insertuser/<userid>/<session>/<imageurl>/', views.insert_near_user),
    path('deleteuser/<userid>/', views.delete_near_user),
    path('getNearUser/', views.get_near_user),
    path('getstate/', views.get_state_user),
]
