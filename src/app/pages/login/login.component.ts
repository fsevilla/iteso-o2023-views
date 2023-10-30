import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private tokenService: TokenService, private router: Router) {}

  login() {

    setTimeout(() => {
      this.tokenService.save('123123132');
      this.router.navigate(['']);
    })
  }

}
