import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Bericht } from '../model/bericht.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BerichtService {

  readonly base_url = 'http://localhost:1234/api/';

  constructor(private httpClient: HttpClient, private authService: AuthService){}

  getBerichten(): Observable<Bericht[]> {

    let token = this.authService.user.token || '';

    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'x-access-token' : token
    });
    let params = new HttpParams();

    return this.httpClient.get<Bericht[]>
    (
        this.base_url + 'berichten', 
        { headers: headers, params: params }
    ).pipe (
        // Request gaat goed
        map( berichten  => {
          return berichten;
        }),
        // Request is fout gegaan
        catchError ( err => {
            return of(err)
        })
    );
  }

  post(bericht: string) : Observable<any>{

    let token = this.authService.user.token || '';

    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'x-access-token' : token
    });
    let params = new HttpParams();

    let owner = this.authService.user.email || '';
    let body = { 'owner': owner, 'content': bericht}

    return this.httpClient.post<any>
    (
        this.base_url + 'bericht', 
        body,
        { headers: headers, params: params }
    ).pipe (
        // Request gaat goed
        map( bericht  => {
          return bericht;
        }),
        // Request is fout gegaan
        catchError ( err => {
            return of(err)
        })
    );
  }

}
