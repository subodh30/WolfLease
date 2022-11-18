import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Apartment } from '../models/Apartment';
import { Owner } from '../models/Owner';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-owner-apartments',
  templateUrl: './owner-apartments.component.html',
  styleUrls: ['./owner-apartments.component.scss']
})
export class OwnerApartmentsComponent implements OnInit {

  loading: boolean = false;
  selectedApartmentId : string = '';
  apartments: Apartment[] = [];
  ownerApartment: any[];
  ownerFlats: any[];
  owner: Owner = ApiService.LoggedInOwner;
  constructor(public _apiService:ApiService,private _snackBar: MatSnackBar) { 
    this.ownerApartment = [];
    this.ownerFlats = [];
  }

  ngOnInit(): void {
    this.loading = true;
    if(this.owner.id != '')
    {
      this._apiService.getApartments().subscribe(
        (data) => {
          this.apartments = data;
          this.ownerApartment.push(this.apartments.find(apartment => apartment.owner_id == this.owner.id)!);
          this.loading = false;
          console.log(this.ownerApartment);
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error fetching apartments", "Close", {
            duration: 2000,
          });
        }
      );

    }
    else{
      this._snackBar.open("Sorry something went wrong. Please try again later.", "Close", {
        duration: 2000,
      });
    }
  }
  getFlatsForApartment(apartment_id : any){
    this.selectedApartmentId = apartment_id;
    this._apiService.getFlats().subscribe((data) => {
      this.ownerFlats.push(data.find(flat => flat.associated_apt_id == apartment_id)!);
      this.loading = false;
      console.log(this.ownerFlats);
    },
    (error) => {
      this.loading = false;
      this._snackBar.open("Error fetching flats", "Close", {
        duration: 2000,
      });
    });
  }
  }

