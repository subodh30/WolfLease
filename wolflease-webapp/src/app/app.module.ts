import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { LeaseComponent } from './lease/lease.component';
import { FlatComponent } from './flat/flat.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OwnerComponent,
    ApartmentComponent,
    LeaseComponent,
    FlatComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
