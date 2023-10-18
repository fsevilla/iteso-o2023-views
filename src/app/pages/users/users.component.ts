import { Component } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  selectedUser: User = { name: '', email: '' };

  doOnUserSelected(user: User) {
    this.selectedUser = {...user};
  }

  doOnUserReset() {
    this.selectedUser = { name: '', email: '' }
  }

}
