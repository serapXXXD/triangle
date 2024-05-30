from .models import TestModel
from rest_framework import viewsets, permissions


class TestViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    permission_classes = [permissions.AllowAny]

