from django.urls import path
from .views import TestViewSet
from rest_framework.routers import SimpleRouter

app_name = 'api'

router = SimpleRouter()
router.register('123', TestViewSet)

urlpatterns = [
    ] + router.urls
