import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserDetailsComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent},
  // { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent, children: [
    // {path: '', component: UsersComponent},
    {path: ':id', component: UserDetailsComponent},
  ]},
];

@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
