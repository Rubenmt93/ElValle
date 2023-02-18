import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService){}

  canActivate(): Observable<boolean > | Promise<boolean> | boolean {
    const user = localStorage.getItem('ElValle');
    if(user){
     return true
    }
    return false
  }
  canLoad(   ): Observable<boolean> | Promise<boolean> | boolean  {
    const user = localStorage.getItem('ElValle');
    if(user){
     return true
    }
    return false
  }
}
