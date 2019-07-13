from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse
from post.models import *

def get_list_by_user(request, para0, para1, para2):
    fb = Post(id=para0, session=para1, imageUrl=("/"+para2))
    fb.save()

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
