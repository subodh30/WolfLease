import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Owner } from '../models/Owner';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  owner: Owner = new Owner({
    contact_email: "",
    contact_number: "",
    password: ""
  });

  user: User = new User({
    contact_email: "",
    contact_number: "",
    password: "",
    user_type: "user",
    dob: "",
    gender: "",
    pref_smoking: "",
    pref_drinking: "",
    pref_veg: "",
    flat_id: null
  });

  roles = ["Owner", "User"];
  options = ["Y", "N"];
  genders = ["M","F","O"];
  selectedRoleIndex: number = 0;
  loading: boolean = false;

  constructor(public router: Router, public _apiService: ApiService, private _snackBar: MatSnackBar) { }

  submitForm() {
    this.loading = true;
    if (this.selectedRoleIndex == 0) {
      this._apiService.addOwner(this.owner).subscribe(
        data => {
          this._snackBar.open("User created successfully!", "", {
            duration: 2000,
          });
          this.loading = false;
          this.router.navigate(['/login']);
        },
        error => {
          this._snackBar.open("Error creating owner!", "", {
            duration: 2000,
          });
          this.loading = false;
        }
      );
    }
    else{
      this.user.dob = new DatePipe('en-US').transform(this.user.dob, 'yyyy-MM-dd')!.toString();
      this.user.contact_email = this.owner.contact_email;
      this.user.contact_number = this.owner.contact_number;
      this.user.password = this.owner.password;
      this._apiService.addUser(this.user).subscribe(
        data => {
          this._snackBar.open("User created successfully!", "", {
            duration: 2000,
          });
          this.loading = false;
          this.router.navigate(['/login']);
        },
        error => {
          this._snackBar.open("Error creating user!", "", {
            duration: 2000,
          });
          this.loading = false;
        }
      );
    }
  }

}
