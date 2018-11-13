import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserItemComponent } from './components/users/user-list/user-item/user-item.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
