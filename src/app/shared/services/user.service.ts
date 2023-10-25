import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: BehaviorSubject<User> = new BehaviorSubject<User>({
    name: '',
    email: ''
  });

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url: string = environment.apiUrl + 'users';
    return this.httpClient.get<User[]>(url);
  }

  setUser(user: User) {
    this.selectedUser.next(user);
  }

}
