import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  readonly url = 'https://node-persons-server.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  login(): void {
    const inlogUrl = `${this.url}/login`;
    //this.httpClient.post(inlogUrl, ).
    //localStorage.setItem('token', '');
    // Direct or through oath2?
  }

  logout(): void {

  }

  get hasValidToken(): boolean {
    return true;
  }
}
