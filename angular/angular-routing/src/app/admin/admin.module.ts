import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from '../logged-in.guard';
import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutesModule
  ],
  providers : [
    LoggedInGuard
  ]
})
export class AdminModule { }
