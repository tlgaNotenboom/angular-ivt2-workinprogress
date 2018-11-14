import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FurbiesListComponent } from './furbies-list/furbies-list.component';
import { FurbyDetailComponent } from './furby-detail/furby-detail.component';
import { FurbyService } from './furby.service'

@NgModule({
  declarations: [
    AppComponent,
    FurbiesListComponent,
    FurbyDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FurbyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
