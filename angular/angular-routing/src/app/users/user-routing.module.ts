import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../components/users/user-list/user-list.component';
import { UserDetailsComponent } from '../components/users/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';

const userRoutes: Routes = [
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children : [
       { path : '', component: UserDetailsComponent },
       { path : ':id', component: UserDetailsComponent }
  ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
