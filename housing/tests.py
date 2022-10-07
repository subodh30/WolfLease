from enum import Flag
from time import sleep
from urllib import response
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from housing.models import Flat, Owner

class OwnerTests(APITestCase):
    def test_create_owner(self):
        """
        Ensure we can create a new Owner object.
        """
        url = '/owners/'
        data = {'contact_number': '1234567890', 'contact_email': 'test@testing.com', 'password': 'test'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Owner.objects.count(), 1)
        self.assertEqual(Owner.objects.get().contact_email, 'test@testing.com')

    def test_show_owner(self):
        """
        Ensure we can fetch a new Owner object.
        """
        url = '/owners/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Owner.objects.count(), 0)

    def test_update_owner(self):
        url = '/owners/'
        data = {'contact_number': '1234567890', 'contact_email': 'test@testing.com', 'password': 'test'}
        response = self.client.post(url, data, format='json')
        url = url + str(Owner.objects.get().id) + '/'
        data = {'contact_number': '1234567890', 'contact_email': 'test1@testing.com', 'password': 'test'}
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Owner.objects.count(), 1)
        self.assertEqual(Owner.objects.get().contact_email, 'test1@testing.com')

    def test_delete_owner(self):

        url = '/owners/'
        data = {'contact_number': '1234567890', 'contact_email': 'test@testing.com', 'password': 'test'}
        response = self.client.post(url, data, format='json')
        url = url + str(Owner.objects.get().id) + '/'
        data = {'contact_number': '1234567890', 'contact_email': 'test1@testing.com', 'password': 'test'}
        response = self.client.delete(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Owner.objects.count(), 0)
    
    def test_create_flat(self):
        """
        Ensure we can create a new Flat object.
        """
        url = '/flats/'
        data = {'availability': 'True', 'rent_per_room': '565', 'floor_number': '3'}
        response = self.client.post(url, data, format='json')
        print(Flat.objects.get().id, " hello")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Flat.objects.count(), 1)
        self.assertEqual(Flat.objects.get().availability, 'True')
