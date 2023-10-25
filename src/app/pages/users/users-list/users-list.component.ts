import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnChanges {

  users: User[] = [];

  @Input() currentUser: User = { name: '', email: ''};
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
    this.userService.setUser(user);
  }

  ngOnChanges() {
    this.userService.setUser(this.currentUser);
  }


}
