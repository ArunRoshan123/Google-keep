import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/Auth/auth.service';
@Injectable({providedIn:'root'})
export class AuthGuard {
  constructor(private auth:AuthService,private route:Router){}
  // canActivate():boolean{
  //   if(! this.auth.gettokenforAuth()){
  //     this.route.navigateByUrl("/login");
  //   }
  //   return this.auth.gettokenforAuth();
  // }
};
