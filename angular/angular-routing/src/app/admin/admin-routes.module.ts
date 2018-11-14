import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../logged-in.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const adminRoutes: Routes = [
//  { path: 'admin', component: DashboardComponent, canActivate: [ LoggedInGuard ] }
{ path: 'admin', component: DashboardComponent, canActivate: [ LoggedInGuard ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutesModule { }
