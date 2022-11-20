import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../models/Owner';
import { Apartment } from '../models/Apartment';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.scss']
})
export class CreateApartmentComponent implements OnInit {

  createApartmentForm: FormGroup;
  loading: boolean = false;
  createFormData: Object = {};
  owner: Owner = new Owner();
  ownerId : string = '';
  constructor(public router: Router,private route : ActivatedRoute,private fb: FormBuilder, public _apiService:ApiService,private _snackBar: MatSnackBar) {
    this.createApartmentForm = this.fb.group({
      address: ['', [Validators.required]],
      facilities: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.ownerId = '';
    this.loading = true;
    this.route.queryParams
      .subscribe(params => {
        this.ownerId = params['owner_id'];
      }
    );
    if(this.ownerId != '')
    {
      this._apiService.getOwners().subscribe(
        (data) => {
          this.owner = data.find(owner => owner.id == this.ownerId)!;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error fetching Owner Details!", "Close", {
            duration: 2000,
          });
        }
      );
    }
  }

  // submit function to call actual API and get short URL
  createNewApartment() {
    // only call API if form is valid
    if (this.createApartmentForm.valid) {
      this.createApartmentForm.markAllAsTouched();
      this.loading = true;
      let apartment = new Apartment({
        "address": this.createApartmentForm.get('address')?.value,
        "facilities": this.createApartmentForm.get('facilities')?.value,
        "owner_id": this.owner.id,
      });
      this._apiService.addApartment(apartment).subscribe(
        (data) => {
          this.loading = false;
          this._snackBar.open("Apartment Created", "Close", {
            duration: 2000,
          });
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error creating apartment", "Close", {
            duration: 2000,
          });
        }
      );
    }
    this.router.navigate(['/owner/apartment']);
  }
}

export class DialogShortUrlComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  content: string = this.data.content
  title: string = this.data.title
}