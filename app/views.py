from .models import Blog
from django.shortcuts import render
from django.http import HttpResponse

import json
import datetime

def isValid(form):
    if len(form['name'].strip()) > 2 and len(form['blog'].strip()) > 9:
        if '@' in form['email']:
            if isValidDate(form['date']):
                return True
    return False

def isValidDate(dateStr):
    try:
        datetime.datetime.strptime(dateStr.strip(), '%Y-%m-%d')
    except:
        return False
    else:
        return True

def converToDateObj(dateStr):
    return datetime.datetime.strptime(dateStr.strip(), '%Y-%m-%d')

def sort_top_bloggers_with_name():
    objects = Blog.objects.all()
    SortedDict = {}
    for obj in objects:
        try:
            SortedDict[obj.name] += 1
        except: 
            SortedDict[obj.name] = 1

    SortedDict = sorted(SortedDict.items(), key = lambda x:x[1], reverse = True)
    returnValue = []
    for i in SortedDict[0:3]:
        returnValue.append(i[0])
    return returnValue

def sort_top_bloggers_with_email():
    objects = Blog.objects.all()
    SortedDict = {}
    for obj in objects:
        try:
            SortedDict[obj.email] += 1
        except: 
            SortedDict[obj.email] = 1

    SortedDict = sorted(SortedDict.items(), key = lambda x:x[1], reverse = True)
    returnValue = []
    for i in SortedDict[0:3]:
        returnValue.append(i[0])
    return returnValue

# Create your views here.

def add_blog(request):
    if request.method == 'POST':
        form = request.POST
        if isValid(form):
            Blog.objects.create(
                name=form['name'].strip(), date=converToDateObj(form['date']), email=form['email'].strip(), blog=form['blog'].strip()
            )
    return render(request, 'app/add-blog.html', {
        'app': Blog,
    })

def home_page(request):
    objects = list(Blog.objects.all())
    objects.reverse()
    context = {
        'blogObj' : objects,
    }
    return render(request, 'app/home-blog.html', context)

def name_list_request(request):
    return HttpResponse(
        json.dumps(sort_top_bloggers_with_name())
    )

def email_list_request(request):
    return HttpResponse(
        json.dumps(sort_top_bloggers_with_email())
    )