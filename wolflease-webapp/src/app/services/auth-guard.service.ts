import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class OwnerAuthGuard implements CanActivate {
    canActivate() {
        //Your redirect logic/condition. I use this.
        if (ApiService.LoggedInUserType != "owner") {
            this.router.navigate(['login']);
        }
        console.log('AuthGuard#canActivate called');
        return true;
    }
    //Constructor 
    constructor(private router: Router) { }
}

@Injectable()
export class UserAuthGuard implements CanActivate {
    canActivate() {
        //Your redirect logic/condition. I use this.
        if (ApiService.LoggedInUserType != "user") {
            this.router.navigate(['login']);
        }
        console.log('AuthGuard#canActivate called');
        return true;
    }
    //Constructor 
    constructor(private router: Router) { }
}