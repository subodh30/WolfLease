import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { LeaseComponent } from './lease/lease.component';
import { FlatComponent } from './flat/flat.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { CreaterOwnerComponent } from './creater-owner/creater-owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ApartmentComponent,
    LeaseComponent,
    FlatComponent,
    UserComponent,
    CreaterOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
