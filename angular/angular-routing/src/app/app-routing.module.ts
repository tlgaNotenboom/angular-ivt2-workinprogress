import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//,
  // { path: 'users/list', component: UserListComponent },
  // { path: 'users/list/:id', component: UserDetailsComponent },
  // { path: 'users', component: UsersComponent, children : [
  //      { path : '', component: UserDetailsComponent },
  //      { path : ':id', component: UserDetailsComponent }
  // ] },
//  { path: 'admin', component: DashboardComponent, canActivate: [ LoggedInGuard ] },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
