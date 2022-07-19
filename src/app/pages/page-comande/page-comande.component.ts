import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenIdentificationService } from 'src/app/services/token-identification.service';

@Component({
  selector: 'app-page-comande',
  templateUrl: './page-comande.component.html',
  styleUrls: ['./page-comande.component.scss']
})
export class PageComandeComponent implements OnInit {

  public listeProduit : any;

  public clien : boolean = false;

  public idAuthenticateConnecte : number = 0;

  constructor(private client: HttpClient, 
    private tokenIdentification : TokenIdentificationService,
    private router : Router) { }
  ngOnInit(): void {
    this.raffraichirListeProduit()

    this.tokenIdentification.authenticate.subscribe( 
      (authenticate:any) => {
        console.log(authenticate)
        this.client = authenticate != null && authenticate.droits.includes("ROLE_CLIENT") //resultat boolean administrateur ou pas 
        this.idAuthenticateConnecte = authenticate.id //c'est quoi son id
      } 
      
    )

    console.log(this.client)
  }


  raffraichirListeProduit() {

    // const enTete: HttpHeaders = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*'
    // });

    this.client.get("http://localhost:8080/liste-utilisateur")
      .subscribe(reponse => this.listeProduit = reponse);
  }

}
