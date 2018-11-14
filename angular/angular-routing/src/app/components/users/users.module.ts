import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserNotfoundComponent } from './user-notfound/user-notfound.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    UserNotfoundComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
