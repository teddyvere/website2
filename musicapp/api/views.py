from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(request):
    return HttpResponse("<h1>Hello, World! This is the main page of the Music App.</h1>")
