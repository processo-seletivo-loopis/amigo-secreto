from random import choice

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import UserAppSerializer
from .models import UserApp

from django.core.mail import send_mail


class UserAppView(viewsets.ModelViewSet):
    serializer_class = UserAppSerializer
    queryset = UserApp.objects.all()


@api_view(["POST"])
def getDraw(request):

    if request.method == "POST":

        dic = {}
        users = list(UserApp.objects.all())

        for user in users:
            while True:
                friend = choice(users)
                if friend != user and not friend in dic.values():
                    break
            dic[user] = friend

        for key, value in dic.items():
            send_mail(
                "Seu amigo secreto!",
                f"Obrigado por usar nosso site! Seu amigo secreto é = {value.name}: {value.email}",
                "amigosecretoloopis@gmail.com",
                [f"{key.email}"],
                fail_silently=False,
            )
        UserApp.objects.all().delete()

        return Response(request.data)
