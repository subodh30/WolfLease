import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Owner } from '../models/Owner';
import { Apartment } from '../models/Apartment';


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
  owners: Owner[] = [];
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.createApartmentForm = this.fb.group({
      address: ['', [Validators.required]],
      facilities: ['', [Validators.required]],
      owner_id: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getAllOwners();
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
        "owner_id": this.createApartmentForm.get('owner_id')?.value
      });
    }
  }

  getAllOwners() {
    //set owners here
  }

}

export class DialogShortUrlComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  content: string = this.data.content
  title: string = this.data.title
}