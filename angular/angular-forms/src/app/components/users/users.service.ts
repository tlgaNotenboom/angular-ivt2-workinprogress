import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor(
    private http: HttpClient
  ) { 
    console.log('UserService constructed');
    console.log(`Connected to ${environment.apiUrl}`);
  }

  public getUsers() {
    console.log('getUsers');
    // return this.http.get(`${environment.apiUrl}/api/persons?offset=0&amount=8`).pipe(
    //   //   convert incoming responsestring to json
    //   map(response => response.json()),
    //   //   get only the results property
    //   map(response => response.results),
    //   //   optionally log the results
    //   tap(console.log),
    //   //   convert json array to User array
    //   map(users => users.map(data => new User(data))),
    //   //   optionally log the results
    //   tap(console.log)

    //   // map(response => response.results.map(data => new User(data))),
    //   // tap(users => {
    //   //     this.users = users;
    //   //   })
    //     // error => console.log(error))
    // );

    return new Observable<User[]>();
  }

  getUser(id: number): User {
    console.log(`getUser(${id})`);

    if(this.users && id >= 0 && id < this.users.length){
      // id is valid and users are available
      return this.users[id];
    } else {
      return undefined;
    }
  }


}

