from django.urls import path

from . import views



urlpatterns = [
    path('insert/<id>/<session>/<image>/', views.insert_user),
    path('delf/<id>/', views.delete_near_user),
    path('getNearUser/', views.get_near_user),
]
