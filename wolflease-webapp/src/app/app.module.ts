import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LeaseComponent } from './lease/lease.component';
import { FlatComponent } from './flat/flat.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { CreaterOwnerComponent } from './creater-owner/creater-owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { InterestComponent } from './interest/interest.component';
import { CreateFlatComponent } from './create-flat/create-flat.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LeaseComponent,
    FlatComponent,
    UserComponent,
    CreaterOwnerComponent,
    CreateApartmentComponent,
    LoginComponent,
    SignupComponent,
    ApartmentComponent,
    InterestComponent,
    CreateFlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    MatButtonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
