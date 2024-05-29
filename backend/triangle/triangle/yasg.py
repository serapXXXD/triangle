from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title='triangle',
        default_version='v1',
        description='yasg_description',
        license=openapi.License(name='BSD License'),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path("swagger(?P<format>\\.json|\\.yaml)", schema_view.without_ui(), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-ui'),
]