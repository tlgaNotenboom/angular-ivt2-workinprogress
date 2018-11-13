import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlaceholderComponent}
  // fill in other routers here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
