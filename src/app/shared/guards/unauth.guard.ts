import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.tokenService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
  
}
