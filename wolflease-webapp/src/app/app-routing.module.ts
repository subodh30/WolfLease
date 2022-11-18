import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './apartment/apartment.component';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { CreateFlatComponent } from './create-flat/create-flat.component';
import { InterestComponent } from './interest/interest.component';
import { LeaseComponent } from './lease/lease.component';
import { LoginComponent } from './login/login.component';
import { OwnerApartmentsComponent } from './owner-apartments/owner-apartments.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'owner/apartment', component: OwnerApartmentsComponent },
  { path: 'apartment/new', component: CreateApartmentComponent},
  { path: 'flat/new', component: CreateFlatComponent},
  { path: 'interests', component: InterestComponent},
  {path:'lease', component:LeaseComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
