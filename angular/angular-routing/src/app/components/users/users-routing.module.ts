import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminGuard as UserIsAdmin } from '../../admin.guard';
import { UserNotfoundComponent } from './user-notfound/user-notfound.component';

const routes: Routes = [
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserDetailsComponent },
    { path: ':id', component: UserDetailsComponent },
    { path: '**', component: UserNotfoundComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
