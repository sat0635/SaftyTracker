from django.shortcuts import render
from rest_framework import generics

from .models import Session1_1
from django.http import HttpResponse,JsonResponse
from post.models import *
import json
def insert_user(request, para0, para1, para2):
    fb = Post(id=para0, session=para1, imageUrl=("/"+para2))
    fb.save()

def delete_near_user(request, id):
    fb = Post(id=para0)
    fb.save()

def get_near_user(request):
    queryset = Session1_1.objects.all()
    dict_list=[]      
    for row in queryset:
        dict_user={}
        dict_user["id"]=row.id
        dict_user["session"]=row.session
        dict_user["imageUrl"]=row.imageUrl
        dict_list.append(dict_user)

         
    return JsonResponse(dict_list,safe=False)


