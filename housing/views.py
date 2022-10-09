from django.shortcuts import render
from rest_framework import filters, viewsets, generics
from housing import serializers
from housing import models


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

class FlatViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['availability', 'rent_per_room']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Flat.objects.all()
    serializer_class = serializers.FlatSerializer

class OwnerViewSet(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    search_fields = ['contact_email', 'contact_number', 'id']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Owner.objects.all()
    serializer_class = serializers.OwnerSerializer

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


class ApartmentViewSet(viewsets.ModelViewSet):
    search_fields = ['address', 'facilities', 'owner_id']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Apartment.objects.all()
    serializer_class = serializers.ApartmentSerializer

    