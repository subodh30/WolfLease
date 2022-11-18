import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-owner-apartments',
  templateUrl: './owner-apartments.component.html',
  styleUrls: ['./owner-apartments.component.scss']
})
export class OwnerApartmentsComponent implements OnInit {

  ownerId : string = '';
  constructor(private route: ActivatedRoute,public _apiService:ApiService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.ownerId = params['ownerId'];
      }
    );
    if(this.ownerId != '')
    {
      this._apiService.searchApartments(this.ownerId).subscribe(data => {
        this._snackBar.open("User created successfully!", "", {
          duration: 2000,
        });
        console.log(data);
      },
      error => {
        this._snackBar.open("Error searching for your apartments!", "", {
          duration: 2000,
        });
      });

    }
    else{
      this._snackBar.open("Sorry something went wrong. Please try again later.", "Close", {
        duration: 2000,
      });
    }
  }
  }

