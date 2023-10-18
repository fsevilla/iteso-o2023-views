import { Component, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users: User[] = [];

  currentUser: User = { name: '', email: ''};
  @Output() onUserSelected: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService) {
    console.log(userService);
  } 

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

  selectUser(user: User) {
    this.currentUser = user;
    this.onUserSelected.emit(user);
  }


}
