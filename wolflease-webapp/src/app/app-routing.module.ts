import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { CreaterOwnerComponent } from './creater-owner/creater-owner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'create/owner', component: CreaterOwnerComponent},
  { path: 'create/apartment', component: CreateApartmentComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
