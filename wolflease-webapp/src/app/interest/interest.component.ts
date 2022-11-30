import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Interest } from '../models/Interest';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit{

  constructor(private route : ActivatedRoute, public _apiService:ApiService,private _snackBar: MatSnackBar) { }
  flatId : string = '';
  interests : Interest[] = [];
  loading :boolean = false;
  ngOnInit(){
    this.loading = true;
    this.route.queryParams
      .subscribe(params => {
        this.flatId = params['flatId'];
      }
    );
    if(this.flatId != '')
    {
      this._apiService.getInterests().subscribe(
        (data) => {
          this.interests = data.filter(flat => flat.flat_id == this.flatId)!
          this.loading = false;
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
  acceptInterestInApartment(interest : any){
    console.log(interest);
  }
}
