from rest_framework import serializers
from .models import UserApp


class UserAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserApp
        fields = ("id", "email", "name")
