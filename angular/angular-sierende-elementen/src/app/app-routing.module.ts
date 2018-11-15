import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MapComponent } from './map/map.component';
import { DashboardDetailedComponent } from './dashboard-detailed/dashboard-detailed.component';
// import { UsersComponent } from './components/users/users.component';
// import { UserListComponent } from './components/users/user-list/user-list.component';
// import { UserDetailsComponent } from './components/users/user-details/user-details.component';
// import { AdminGuard as UserIsAdmin } from './admin.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: DashboardDetailedComponent },
    { path: ':id', component: DashboardDetailedComponent }
  ] },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

//   { path: 'users/list', component: UserListComponent },
//   { path: 'users/list/:id', component: UserDetailsComponent },
//   { path: 'users', component: UsersComponent, children: [
//     { path: '', component: UserDetailsComponent },
//     { path: ':id', component: UserDetailsComponent }
//   ] },
//   { path: 'admin', canActivate: [ UserIsAdmin], component: DashboardComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }