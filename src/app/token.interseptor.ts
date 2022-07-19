import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { TokenIdentificationService } from './services/token-identification.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenIdentification : TokenIdentificationService,
    private router : Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    

    let enTete;

    console.log("Utilisateur ", this.tokenIdentification.authenticate?.value);

    if (localStorage.getItem('token') != null) {//recupère la valeur de mon observable :le corp du token
      

      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    } else {
      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }

    const requeteClone = request.clone({
      headers: enTete
    });
    
    return next.handle(requeteClone);
    
  }
}
