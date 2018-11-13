import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
