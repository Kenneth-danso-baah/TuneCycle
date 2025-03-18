from django.urls import path
from .views import RecommendSongs

urlpatterns = [
    path('recommend/', RecommendSongs.as_view(), name='recommend')
]