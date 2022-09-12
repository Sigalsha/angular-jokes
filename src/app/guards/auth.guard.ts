import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    let isLogged: string | null = localStorage.getItem('isUserLoggedIn');

    if (isLogged != null && isLogged === 'true') {
      if (url == '/login') this.router.parseUrl('/jokes');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
    return this.router.parseUrl('/login');
  }
}
