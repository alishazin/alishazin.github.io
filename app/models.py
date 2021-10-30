from django.db import models
from django.db.models.fields import CharField, DateField, EmailField, TextField
from django.shortcuts import redirect

# Create your models here.

class Blog(models.Model):
    name = CharField(max_length=30)
    date = DateField()
    email = EmailField()
    blog = TextField()

    @classmethod
    def go_to_home_screen():
        return redirect('../home')