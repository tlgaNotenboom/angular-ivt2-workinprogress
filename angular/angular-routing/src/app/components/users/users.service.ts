import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];

  constructor(
    private http: Http
  ) {
    console.log('Constructor');
  }

  getAllUsers(): Observable<User[]>  {
    return this.http.get('https://randomuser.me/api/?results=10')
      .pipe(
        // Zet de responsestring om in json
        map(response => response.json()),
        // Haal de results-property uit de response
        map(response => response.results), 
        // Maak van het resultaat dat we nu hebben een array van User objecten.
        map(response => response.map(data => new User(data))),
        // Log dat resultaat voor debugging.
        tap(console.log),
        tap(users => this.users = users)
      );
      // Wat we hier nu hebben is een Observable. Die geeft pas resultaat als je er 'subscribe' op aanroept.
      // Dat doen we pas bij de aanroep van getAllUsers in de service.
  }

  getUserById(id: number): User {
    if(this.users && id >= 0 && id < this.users.length){
      const user = new User(this.users[id]);
      console.log(user);
      return user;
    } else {
      return undefined;
    }
  }
}
