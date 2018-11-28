import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { BerichtenComponent } from "./berichten/berichten.component";
import { BerichtDetailComponent } from "./bericht-detail/bericht-detail.component";
import { GuardService } from "./services/guard.service";
import { PostBerichtComponent } from "./post-bericht/post-bericht.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'berichten', component: BerichtenComponent, canActivate: [GuardService] },
    { path: 'bericht-detail', component: BerichtDetailComponent, canActivate: [GuardService] },
    { path: 'bericht-post', component: PostBerichtComponent, canActivate: [GuardService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }