from django.shortcuts import render
from rest_framework import generics

from .models import Area1
from django.http import HttpResponse,JsonResponse
from post.models import *
import json



def insert_near_user(request, userid, session, imageurl):
    instance = Area1(id=userid, session=session, imageUrl=("/"+imageurl))
    instance.save()

def insert_state_user(request, userid, state):
    instance = User(id=userid, state=state)
    instance.save()

def get_state_user(request):
    queryset = User.objects.all()
    dict_list=[]
    for row in queryset:
        dict_state={}
        dict_state["id"]=row.id
        dict_state["state"]=row.state
        dict_list.append(dict_state)

    return JsonResponse(dict_list,safe=False)

def delete_near_user(request, userid):
    instance = Area1.objects.get(id=userid)
    instance.delete()

def get_near_user(request):
    queryset = Area1.objects.all()
    dict_list=[]      
    for row in queryset:
        dict_user={}
        dict_user["id"]=row.id
        dict_user["session"]=row.session
        dict_user["imageUrl"]=row.imageUrl
        dict_list.append(dict_user)

         
    return JsonResponse(dict_list,safe=False)


