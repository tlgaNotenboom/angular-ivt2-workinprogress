import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersComponent } from '../components/users/users.component';
import { UserListComponent } from '../components/users/user-list/user-list.component';
import { UserDetailsComponent } from '../components/users/user-details/user-details.component';
import { UserItemComponent } from '../components/users/user-list/user-item/user-item.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { UserService } from './userservice';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent
],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UsersModule {
}
