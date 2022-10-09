from venv import create
from django.shortcuts import render
from rest_framework import filters, generics
from housing import serializers
from housing import models
from rest_framework.decorators import api_view, permission_classes, authentication_classes


# Create your views here.
class UserViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """

# Add search fields to the user view set
    search_fields = ['contact_email', 'contact_number']
    filter_backends = (filters.SearchFilter,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

class UserCreateViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes=[]
    authentication_classes=[]

class FlatViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['availability', 'rent_per_room']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Flat.objects.all()
    serializer_class = serializers.FlatSerializer

class OwnerViewSet(generics.ListAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['contact_email', 'contact_number', 'id']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Owner.objects.all()
    serializer_class = serializers.OwnerSerializer
   

class OwnerCreateViewSet(generics.CreateAPIView):
    queryset = models.Owner.objects.all()
    serializer_class = serializers.OwnerSerializer
    permission_classes=[]
    authentication_classes=[]

class InterestedViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['apartment_id', 'flat_id', 'user_id']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Interested.objects.all()
    serializer_class = serializers.InterestedSerializer

class LeaseViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['lease_start_date', 'lease_end_date']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Lease.objects.all()
    serializer_class = serializers.LeaseSerializer


class ApartmentViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):

    search_fields = ['address', 'facilities', 'owner_id']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Apartment.objects.all()
    serializer_class = serializers.ApartmentSerializer