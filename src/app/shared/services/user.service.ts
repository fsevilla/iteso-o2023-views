import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

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
    const url: string = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(url);
  }


}
