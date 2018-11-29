import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BerichtService } from './services/bericht.service';
import { GuardService } from './services/guard.service';
import { BerichtenComponent } from './berichten/berichten.component';
import { AuthService } from './services/auth.service';
import { BerichtDetailComponent } from './bericht-detail/bericht-detail.component';
import { PostBerichtComponent } from './post-bericht/post-bericht.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerichtenComponent,
    BerichtDetailComponent,
    PostBerichtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BerichtService, GuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
