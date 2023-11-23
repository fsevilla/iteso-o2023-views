import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";

import { User } from 'src/app/shared/interfaces/user';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Token } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = { name: '', email: '' };

  loginStatus: boolean = false;

  constructor(
    userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private socialAuth: SocialAuthService,
    private loginService: LoginService
    ) {
    userService.selectedUser.subscribe((user: User) => {
      this.user = user;
    });

    this.tokenService.loginStatus.subscribe((status: boolean) => {
      this.loginStatus = status;
    });

    this.socialAuth.authState.subscribe((user: SocialUser) => {
      console.log('Social user: ', user);
      if(user) {
        this.loginService.googleLogin(user.idToken).subscribe({
          next: (response: Token) => {
            console.log('Si se logueo');
            // Guardar el token con el tokenService
            // Redirigir a home
          },
          error: () => {
            alert('No se pudo iniciar sesion');
          }
        });
      }
    })
  }

  logout() {
    this.tokenService.remove();
    this.router.navigate(['login']);
  }
}
