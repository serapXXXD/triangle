from .models import TestModel
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import TestSerializer
from .tasks import random_digit


class TestViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TestSerializer

    @action(methods=['POST'], detail=False)
    def start_task(self, request):
        random_digit.delay()
        return Response(status=status.HTTP_200_OK, data={})
