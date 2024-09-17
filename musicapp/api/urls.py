from django.urls import include, path
from .views import RoomView

urlpatterns = [
    path('', RoomView.as_view())
]