import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { UserService } from './users/userservice';
import { HttpClientModule } from '@angular/common/http';
import { SchoolResponsiveComponent } from './school-responsive/school-responsive.component';
import { SchoolTemplateComponent } from './school-template/school-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    SchoolResponsiveComponent,

    SchoolTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UsersModule,
    DashboardModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
