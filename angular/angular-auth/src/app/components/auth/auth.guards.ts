import { Injectable } from '@angular/core';
import { 
  Router, 
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot 
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

/**
 * Verifies that user is logged in before navigating to routes.
 * 
 */
@Injectable()
export class LoggedInAuthGuard implements CanActivate, CanActivateChild {

  /**
   * 
   * @param router 
   * @param authService 
   */
  constructor(
    private router: Router, 
    private authService: AuthService
  ) { }

  /**
   * 
   * @param route 
   * @param state 
   */
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean {

    console.log('canActivate LoggedIn');
    const url: string = state.url;
    return this.authService.userIsLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => isLoggedIn 
        // {
        //   if (!isLoggedIn) {
        //     return false;
        //   }
        //   return true;
        // }
        )
      )
  }

  /**
   * 
   * @param route 
   * @param state 
   */
  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {
    console.log('canActivateChild LoggedIn');
    return this.canActivate(route, state);
  }
}

/** ------------------------------------------------------------------------------
 * Verifies that user has Admin role before navigating to routes.
 * 
 * ------------------------------------------------------------------------------ */
@Injectable()
export class AdminRoleAuthGuard implements CanActivate, CanActivateChild {

  /**
   * 
   * @param router 
   * @param authService 
   */
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /**
   * 
   * @param route 
   * @param state 
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('canActivate AdminRole');
    const url: string = state.url;
    return this.authService.userIsAdmin
      .pipe(
        take(1),
        map((isAdmin: boolean) => isAdmin
        // {
        //   if (!isAdmin) {
        //     return false;
        //   }
        //   return true;
        // }
        )
      )
  }

  /**
   * 
   * @param route 
   * @param state 
   */
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('canActivateChild AdminRole');
    return this.canActivate(route, state);
  }
}
