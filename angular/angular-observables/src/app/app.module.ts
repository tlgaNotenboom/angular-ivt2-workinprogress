import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EventHandlerComponent } from './event-handler/event-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EventHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
