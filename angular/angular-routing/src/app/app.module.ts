import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserItemComponent } from './components/users/user-list/user-item/user-item.component';
import { UserNotfoundComponent } from './components/users/user-notfound/user-notfound.component';
import { UsersRoutingModule } from './components/users/users-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent,
    UserNotfoundComponent
  ],
  imports: [
    BrowserModule,
    UsersRoutingModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
