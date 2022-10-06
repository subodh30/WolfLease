from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()


router.register(r'users', views.UserViewSet, basename="user_viewset")
router.register(r'flats', views.FlatViewSet, basename="flat_viewset")
router.register(r'owners', views.OwnerViewSet, basename="owner_viewset")
router.register(r'interests', views.InterestedViewSet, basename="interests_viewset")
router.register(r'lease', views.LeaseViewSet, basename='lease_viewset')
router.register(r'apartment', views.ApartmentViewSet, basename='aprtment_viewset')
urlpatterns = [
    path('', include(router.urls)),
]