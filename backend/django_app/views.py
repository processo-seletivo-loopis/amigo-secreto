from django.shortcuts import render

from rest_framework import viewsets
from .serializers import UserAppSerializer
from .models import UserApp


class UserAppView(viewsets.ModelViewSet):
    serializer_class = UserAppSerializer
    queryset = UserApp.objects.all()
