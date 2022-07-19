import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenIdentificationService } from '../services/token-identification.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(
    private tokenIdentification : TokenIdentificationService,
    private router : Router
    ){} 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
        if(this.tokenIdentification.authenticate.value != null && 
            (
              
              this.tokenIdentification.authenticate.value.droits.includes("ROLE_GERANT")
            )
          )
        {
          return true;
        } 
        return this.router.parseUrl('/connexion');
      }
    
  }
  
