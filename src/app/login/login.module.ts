import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../authGuard/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path: 'dashboard', redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class LoginModule { }
