import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

   //
  // Log in
  //
  login(username: string, password: string): boolean {
    if ( username === 'dkroeske' && password === 'secret') {
      const client = new Client(username);
      localStorage.setItem('currentUser', JSON.stringify(client));
      return true;
    }
    return false;
  }

  //
  //
  //
  getUser(): Client {
    const client: Client = JSON.parse( localStorage.getItem('currentUser') );
    return client;
  }
  
  //
  // Log out
  //
  logout() {
    localStorage.removeItem('currentUser');
  }
}
