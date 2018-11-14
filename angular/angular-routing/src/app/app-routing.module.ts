import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './admin.guard';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children: [
    // {path: '', component: UsersComponent},
    {path: ':id', component: UserDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
