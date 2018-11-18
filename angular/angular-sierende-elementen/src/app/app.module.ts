import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SierendeElementenService } from './services/sierende-elementen.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { SierendElementComponent } from './sierend-element/sierend-element.component';
import { DashboardDetailedComponent } from './dashboard-detailed/dashboard-detailed.component'
import { AuthenticationService } from './services/authentication.service';
import { GuardService } from './services/guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MapComponent,
    SierendElementComponent,
    DashboardDetailedComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SierendeElementenService, AuthenticationService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
