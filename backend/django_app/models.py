from django.db import models


class UserApp(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "App User"
        verbose_name_plural = "App Users"
