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
import { UsersModule } from './users/users.module';
import { UserService } from './components/users/userService';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent  
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
