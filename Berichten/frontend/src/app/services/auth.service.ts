import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {

    readonly url = 'http://localhost:1234/api/login';
    //private _user: User = null;

    constructor(private httpClient: HttpClient) { }

    login(email: string, password: string): Observable<any> {

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams();
        let body = { 'email': email, 'password': password}

        return this.httpClient.post<any>
        (
            this.url, 
            body, 
            { headers: headers, params: params }
        ).pipe (
            // Request gaat goed
            map( result => {
                const user: User = new User(result.email, result.token)
                localStorage.setItem('currentUser', JSON.stringify(user));
                return of(true)
            }),
            // Request is fout gegaan
            catchError ( err => {
                return of(err)
            })
        );
    }

    get user(): User {
        const user: User = JSON.parse( localStorage.getItem('currentUser') );
        return user;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
