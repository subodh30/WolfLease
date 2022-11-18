import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../models/Apartment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-owner-apartments',
  templateUrl: './owner-apartments.component.html',
  styleUrls: ['./owner-apartments.component.scss']
})
export class OwnerApartmentsComponent implements OnInit {

  loading: boolean = false;
  ownerId : string = '';
  apartments: Apartment[] = [];
  ownerApartment: any[];
  constructor(private route: ActivatedRoute,public _apiService:ApiService,private _snackBar: MatSnackBar) { 
    this.ownerApartment = [];
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.ownerId = params['ownerId'];
      }
    );
    if(this.ownerId != '')
    {
      this._apiService.getApartments().subscribe(
        (data) => {
          this.apartments = data;
          this.ownerApartment.push(this.apartments.find(apartment => apartment.owner_id == this.ownerId)!);
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
  }

