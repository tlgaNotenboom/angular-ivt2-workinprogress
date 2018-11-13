import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { AdminGuard as UserIsAdmin } from './admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserDetailsComponent },
    { path: ':id', component: UserDetailsComponent }
  ] },
  { path: 'admin', canActivate: [UserIsAdmin], component: AdminComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
