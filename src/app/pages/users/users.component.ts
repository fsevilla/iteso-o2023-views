import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
    console.log(userService);
  } 

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

}
