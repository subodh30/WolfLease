import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  showFlats = false;
  constructor(public router: Router,public _apiService:ApiService,private _snackBar: MatSnackBar) { 
    this.ownerApartment = [];
    this.ownerFlats = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.showFlats = false;
    if(this.owner.id != '')
    {
      this._apiService.getApartments().subscribe(
        (data) => {
          this.apartments = data;
          console.log(this.owner.id);
          this.ownerApartment = this.apartments.filter(apartment => apartment.owner_id === this.owner.id);
          this.loading = false;
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
    this.ownerFlats = [];
    this.showFlats = false;
    this.selectedApartmentId = apartment_id;
    this._apiService.getFlats().subscribe((data) => {
      this.ownerFlats = data.filter(flat => flat.associated_apt_id == apartment_id);
      this.loading = false;
      this.showFlats = true;
    },
    (error) => {
      this.loading = false;
      this._snackBar.open("Error fetching flats", "Close", {
        duration: 2000,
      });
    });
  }
  showLease(lease_id : string)
  {
    this.router.navigate(['/lease'],{queryParams: {leaseId : lease_id}});
  }
  showInterestsForFlat(flat_id : string)
  {
    this.router.navigate(['/interests'],{queryParams: {flatId : flat_id}});
  }
  createApartment()
  {
    this.router.navigate(['/apartment/new'],{queryParams: {owner_id : this.owner.id}});
  }
  createFlat()
  {
    this.router.navigate(['/flat/new'],{queryParams: {apartmentId : this.selectedApartmentId}});
  }
  }

