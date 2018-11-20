import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MapComponent } from './map/map.component';
import { DashboardDetailedComponent } from './dashboard-detailed/dashboard-detailed.component';
import { GuardService } from './services/guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, children: [
  //   { path: '', component: DashboardDetailedComponent },
  //   { path: ':id', component: DashboardDetailedComponent }
  // ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [GuardService] },
  { path: 'details/:id', component: DashboardDetailedComponent, canActivate: [GuardService] },
  { path: 'map', component: MapComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }