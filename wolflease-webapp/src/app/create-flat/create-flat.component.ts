import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../models/Apartment';
import { Flat } from '../models/Flat';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create-flat.component.html',
  styleUrls: ['./create-flat.component.scss']
})
export class CreateFlatComponent {

  createFlatForm: FormGroup;
  loading: boolean = false;
  createFormData: Object = {};
  apartment: Apartment = new Apartment();
  apartmentId: string = '';
  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, public _apiService: ApiService, private _snackBar: MatSnackBar) {
    this.createFlatForm = this.fb.group({
      rentPerRoom: ['', [Validators.required]],
      floorNumber: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.apartmentId = '';
    this.loading = true;
    this.route.queryParams
      .subscribe(params => {
        this.apartmentId = params['apartmentId'];
      }
    );
    if(this.apartmentId != '')
    {
      this._apiService.getApartments().subscribe(
        (data) => {
          this.apartment = data.find(apartment => apartment.id == this.apartmentId)!;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error fetching Apartment Details!", "Close", {
            duration: 2000,
          });
        }
      );
    }
  }

  // submit function to call actual API and get short URL
  createNewFlat() {
    // only call API if form is valid
    if (this.createFlatForm.valid) {
      this.createFlatForm.markAllAsTouched();
      this.loading = true;
      let flat = new Flat({
        "rent_per_room": this.createFlatForm.get('rentPerRoom')?.value,
        "floor_number": this.createFlatForm.get('floorNumber')?.value,
        "availability": true,
        "associated_apt_id": this.apartment.id
      });
      this._apiService.addFlat(flat).subscribe(
        (data) => {
          this.loading = false;
          this._snackBar.open("Flat Created", "Close", {
            duration: 2000,
          });
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error creating flat", "Close", {
            duration: 2000,
          });
        }
      );
    }
    this.router.navigate(['/owner/apartment']);
  }
}
