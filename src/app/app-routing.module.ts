import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackagesComponent } from './packages/packages.component';
import { CustomersComponent } from './customers/customers.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  {path:'admin',component:AdminComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'customers',component:CustomersComponent},
    {path:'packages',component:PackagesComponent},
    {path:'tracking',component:TrackingComponent},
    {path:'tracking/:id',component:TrackingComponent},
    {path:'profile',component:ProfileComponent,}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteCompenents = [  DashboardComponent,
                                  PackagesComponent,
                                  CustomersComponent,
                                  TrackingComponent,
                                  RegistrationComponent,
                                  SigninComponent,
                                  AdminComponent,
                                  HomeComponent,
                                  ProfileComponent
                                ]
