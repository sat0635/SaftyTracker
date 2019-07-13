from django.urls import path

from . import views



urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('insert/<para0>/<para1>/<para2>/', views.get_list_by_user),
]
