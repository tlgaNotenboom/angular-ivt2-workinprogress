import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(
    private router: Router,
    private authService: AuthenticationService ){} //, private authenticationService: AuthenticationService) { }
  
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //   return new Promise (
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(true);
  //       }, Math.random() * 4000 );
  //     });
  //   //this.router.navigate(['']);
  // }
  
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //  return of(true).pipe(delay(Math.random() * 3000 ));
  // }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if( this.authService.getUser() ) {
      return of(true).pipe(delay(Math.random() * 1000 ));
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //   //return true;
  //   this.router.navigate(['']);
  //   return false;
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //   //return true;
  //   this.router.navigate(['']);
  //   return false;
  // }
  
}
