import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  // what does this do?
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private isAdmin: boolean = true;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // note the string interpolation!
    console.log(`isAdmin is ${this.isAdmin}`);
    return this.isAdmin;
  }
}
