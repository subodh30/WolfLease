import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Apartment } from '../models/Apartment';
import { Flat } from '../models/Flat';
import { Interest } from '../models/Interest';
import { Lease } from '../models/Lease';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loading: boolean = false;
  apartments: Apartment[] = [];
  flats: Flat[] = [];
  availableFlats: Flat[] = [];
  leases: Lease[] = [];
  user: User = ApiService.LoggedInUser;
  userFlat: Flat = new Flat({
    "id": "",
    "availability": false,
    "rent_per_room": 0,
    "floor_number": 0,
    "associated_apt_id": "",
    "lease_id": ""
  });
  userApartment: Apartment = new Apartment({
    "id": "",
    "address": "",
    "facilities": "",
    "owner_id": ""
  });
  userLease: Lease = new Lease({
    "id": "",
    "lease_start_date": "",
    "lease_end_date": ""
  });

  constructor(public router: Router, public _apiService: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true;
    this._apiService.getFlats().subscribe(
      (data) => {
        this.flats = data;
        this.availableFlats = this.flats.filter(flat => flat.availability == true);
        this.userFlat = this.flats.find(flat => flat.id == ApiService.LoggedInUser.flat_id)!;
        this._apiService.getLeases().subscribe(
          (data) => {
            this.leases = data;
            this.userLease = this.leases.find(lease => lease.id == this.userFlat.lease_id)!;
            this._apiService.getApartments().subscribe(
              (data) => {
                this.apartments = data;
                this.userApartment = this.apartments.find(apartment => apartment.id == this.userFlat.associated_apt_id)!;
                this.loading = false;
              },
              (error) => {
                this.loading = false;
                this._snackBar.open("Error fetching apartments", "Close", {
                  duration: 2000,
                });
              }
            );
          },
          (error) => {
            this.loading = false;
            this._snackBar.open("Error fetching leases", "Close", {
              duration: 2000,
            });
          }
        );
      },
      (error) => {
        this.loading = false;
        this._snackBar.open("Error fetching flats", "Close", {
          duration: 2000,
        });
      }
    );
  }

  submitInterest(apartment_id: string, flat_id: string) {
    this.loading = true;
    let interest = new Interest({
      apartment_id: apartment_id,
      flat_id: flat_id,
      user_id: ApiService.LoggedInUser.id
    });
    this._apiService.addInterest(interest).subscribe(
      (data) => {
        this.loading = false;
        this._snackBar.open("Interest submitted", "Close", {
          duration: 2000,
        });
      },
      (error) => {
        this.loading = false;
        this._snackBar.open("Error adding interest", "Close", {
          duration: 2000,
        });
      }
    );
  }

  getApartmentForFlat(flat: Flat) {
    return this.apartments.find(apartment => apartment.id == flat.associated_apt_id)!;
  }
}
