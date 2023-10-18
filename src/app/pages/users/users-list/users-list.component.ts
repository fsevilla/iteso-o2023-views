import { Component } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

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
