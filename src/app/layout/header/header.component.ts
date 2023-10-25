import { Component } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = { name: '', email: '' };

  constructor(userService: UserService) {
    userService.selectedUser.subscribe((user: User) => {
      this.user = user;
    });
  }
}
