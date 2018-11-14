import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurbiesListComponent } from './furbies-list/furbies-list.component';
import { FurbyDetailComponent } from './furby-detail/furby-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/furbies', pathMatch: 'full' },
  { path: 'furbies', component: FurbiesListComponent },
  { path: 'furby/:id', component: FurbyDetailComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
