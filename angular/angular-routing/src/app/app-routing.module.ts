import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { AdminGuard as UserIsAdmin } from './admin.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserDetailsComponent },
    { path: ':id', component: UserDetailsComponent }
  ] },
  { path: 'admin', canActivate: [ UserIsAdmin], component: DashboardComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
