import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: '1',
      name: 'Juan Perez',
      email: 'juanperez@iteso.mx'
    },
    {
      id: '2',
      name: 'John Smith',
      email: 'johnsmith@iteso.mx'
    },
    {
      id: '3',
      name: 'Jane Doe',
      email: 'janedoe@iteso.mx'
    }
  ]

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url: string = environment.apiUrl + 'users';
    return this.httpClient.get<User[]>(url);
  }


}
