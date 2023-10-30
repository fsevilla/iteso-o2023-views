import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/interfaces/user';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = { name: '', email: '' };

  loginStatus: boolean = false;

  constructor(userService: UserService, private tokenService: TokenService, private router: Router) {
    userService.selectedUser.subscribe((user: User) => {
      this.user = user;
    });

    this.tokenService.loginStatus.subscribe((status: boolean) => {
      this.loginStatus = status;
    });
  }

  logout() {
    this.tokenService.remove();
    this.router.navigate(['login']);
  }
}
