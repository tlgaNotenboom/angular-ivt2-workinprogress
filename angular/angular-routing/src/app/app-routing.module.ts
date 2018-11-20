import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolResponsiveComponent } from './school-responsive/school-responsive.component';
import { SchoolTemplateComponent } from './school-template/school-template.component';
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
  { path: 'schoolreponsive', component: SchoolResponsiveComponent },
  { path: 'schoolTemplate', component: SchoolTemplateComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
