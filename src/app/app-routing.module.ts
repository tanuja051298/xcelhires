import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';



const routes: Routes = [
  {path:'', component: LoginComponent},
  // {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: '',loadChildren: () =>import('./login/login.module').then((m) => m.LoginModule)},
  // {path: 'dashboard', redirectTo:'/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

