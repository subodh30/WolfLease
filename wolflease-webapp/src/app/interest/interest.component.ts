import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../models/Apartment';
import { Flat } from '../models/Flat';
import { Interest } from '../models/Interest';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  constructor(private route: ActivatedRoute, public _apiService: ApiService, private _snackBar: MatSnackBar) { }
  flatId: string = '';
  interests: Interest[] = [];
  apartments: Apartment[] = [];
  flats: Flat[] = [];
  users: User[] = [];
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.route.queryParams
      .subscribe(params => {
        this.flatId = params['flatId'];
      }
      );
    if (this.flatId != '') {
      this._apiService.getInterests().subscribe(
        (data) => {
          this.interests = data.filter(flat => flat.flat_id == this.flatId)!
          this._apiService.getApartments().subscribe(
            (data) => {
              this.apartments = data;
              this._apiService.getFlats().subscribe(
                (data) => {
                  this.flats = data;
                  this._apiService.getUsers().subscribe(
                    (data) => {
                      this.users = data;
                      this.loading = false;
                    }
                  );
                }
              );
            }
          );
        },
        (error) => {
          this.loading = false;
          this._snackBar.open("Error fetching interests for this flat", "Close", {
            duration: 2000,
          });
        }
      );
    }
  }

  getApartment(id: string): Apartment {
    return this.apartments.find(apartment => apartment.id == id)!;
  }

  getFlat(id: string): Flat {
    return this.flats.find(flat => flat.id == id)!;
  }

  getUser(id: string): User {
    return this.users.find(user => user.id == id)!;
  }
}


