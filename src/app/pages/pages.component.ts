import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { TokenIdentificationService } from '../services/token-identification.service';

 @Component({
  selector: "pages-app-root",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
 })
 export class PagesComponent{
   

  [x: string]: any;

  identifient : string = "";
  public authenticate:any = {};

  title = 'client-demo';
   constructor(
  private router : Router, private tokenIdentification : TokenIdentificationService
  )
  {}

  ngOnInit(){ //on va observer les donné
    this.tokenIdentification.raffraichir();
    this.authenticate = this.tokenIdentification.authenticate.value
    console.log(this.authenticate)
   }


  logout(){

    this.tokenIdentification.deconnexion();
    this.router.navigate(['/connexion'])
  }

  hasRole(role: string){
    if (this.authenticate && (this.authenticate.roles.length !=0) && this.authenticate.roles.includes(role)) {
      return true;
    } else {
      return false;
    }
  }



 }
