import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SierendeElementenService } from './services/sierende-elementen.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { SierendElementComponent } from './sierend-element/sierend-element.component';
import { DashboardDetailedComponent } from './dashboard-detailed/dashboard-detailed.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MapComponent,
    SierendElementComponent,
    DashboardDetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SierendeElementenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
