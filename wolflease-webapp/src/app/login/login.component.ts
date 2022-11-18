import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../models/Login';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login({
    "email": "",
    "password": "",
    "role": ""
  });
  loading: boolean = false;

  constructor(public router: Router, public _apiService: ApiService, private _snackBar: MatSnackBar) { }

  submitForm() {
    this.loading = true;
    this._apiService.searchOwners(this.login.email).subscribe(
      (data) => {
        if (data.length > 0) {
          this.loading = false;
          if (data[0].password == this.login.password) {
            console.log(data);
            ApiService.LoggedInUserEmail = this.login.email;
            ApiService.LoggedInUserType = "owner";
            ApiService.LoggedInOwner = data[0];
            this.router.navigate(['/owner/apartment']);
          }
          else {
            this._snackBar.open("Invalid credentials", "Close", {
              duration: 2000,
            });
          }
        }
        else {
          this._apiService.searchUsers(this.login.email).subscribe(
            (data) => {
              console.log(data);
              this.loading = false;
              if (data.length > 0) {
                if (data[0].password == this.login.password) {
                  ApiService.LoggedInUserEmail = this.login.email;
                  ApiService.LoggedInUserType = "user";
                  ApiService.LoggedInUser = data[0];
                  this.router.navigate(['/user']);
                }
                else {
                  this._snackBar.open("Invalid Password", "Close", {
                    duration: 2000,
                  });
                }
              }
              else {
                this._snackBar.open("No such user exists. Signup if you want to create a new account.", "Close", {
                  duration: 2000,
                });
              }
            },
            (error) => {
              this.loading = false;
              console.log(error);
              this._snackBar.open("Invalid credentials", "Close", {
                duration: 2000,
              });
            }
          );
        }
      },
      (error) => {
        this.loading = false;
        console.log(error);
        this._snackBar.open("Invalid credentials", "Close", {
          duration: 2000,
        });
      }
    );
  }
}
