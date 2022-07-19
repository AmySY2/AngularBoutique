import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenIdentificationService } from '../services/token-identification.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public listeProduit : any;

  public clien : boolean = false;


  constructor(private client: HttpClient, 
    
    private router : Router) { }


  ngOnInit(): void {
    

  }

}
