import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { User } from './user.model';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://randomuser.me/api/?results=10'
  users: User[]

  constructor(
    private http: Http
  ) {
    console.log('UserService constructed');
   }

  // public getUsers(): any {
  //   return this.users;
  // }

  /**
   * getUsers
   */
  public getUsers(): Observable<User[]> {
    return this.http.get(this.apiUrl).pipe(
      map(response => response.json()),
      map(response => response.results),
      tap(console.log),
      map(users => users.map(data => new User(data))),
      tap(console.log),
      delay(2000)
    );
  }

  getUser(id: number): any {
    return this.users[id];
  }

}
