import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const currentRole: string = localStorage.getItem('role') || '';
      const requiredRole: string = route.data['role']; // ?
      
      if(currentRole === requiredRole) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
  
}
