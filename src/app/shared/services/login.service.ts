import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login() {}

  googleLogin(idToken: string): Observable<Token> {
    const url: string = environment.apiUrl +  'login/google';

    return this.httpClient.post<Token>(url, {idToken});
  }
}
