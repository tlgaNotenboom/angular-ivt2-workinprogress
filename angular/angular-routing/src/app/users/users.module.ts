import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../components/users/users.component';
import { UserListComponent } from '../components/users/user-list/user-list.component';
import { UserDetailsComponent } from '../components/users/user-details/user-details.component';
import { UserItemComponent } from '../components/users/user-list/user-item/user-item.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from '../components/users/userService';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    
  ]
})
export class UsersModule { }
