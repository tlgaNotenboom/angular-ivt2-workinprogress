import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SierendeElementenService } from './services/sierende-elementen.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SierendeElementenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
