import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  // 
  constructor(private router:Router, private login: LoginComponent ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      const token = localStorage.getItem('token');
      if((token == null) ){
        this.router.navigate(['/login']);
    
      }
      return this.login.checkToken(token);
  }
  
}
