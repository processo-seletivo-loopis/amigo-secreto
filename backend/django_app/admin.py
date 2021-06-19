from django.contrib import admin
from .models import UserApp


class UserAppAdmin(admin.ModelAdmin):
    list_display = ("name", "email")
    list_display_links = ("name",)


admin.site.register(UserApp, UserAppAdmin)
