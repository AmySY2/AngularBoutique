import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
 import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';




import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from "./pages.component";
import { PageAjouterProduitComponent } from './page-ajouter-produit/page-ajouter-produit.component';
import { PagePanierComponent } from './page-panier/page-panier.component';
import { PageGererProduitComponent } from './page-gerer-produit/page-gerer-produit.component';
import { PageListeClientsComponent } from './page-liste-clients/page-liste-clients.component';
import { PageModifierProduitComponent } from './page-modifier-produit/page-modifier-produit.component';
import { PageSupprimerProduitComponent } from './page-supprimer-produit/page-supprimer-produit.component';
import { PageBeauteComponent } from './page-beaute/page-beaute.component';
import { PageBienEtreComponent } from './page-bien-etre/page-bien-etre.component';
import { PageBoissonComponent } from './page-boisson/page-boisson.component';
import { PageCerealeComponent } from './page-cereale/page-cereale.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEnfantsComponent } from './page-enfants/page-enfants.component';
import { PageEpicesComponent } from './page-epices/page-epices.component';
import { PageLegumesComponent } from './page-legumes/page-legumes.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageService } from '../services/pages.service';
import { PageComandeComponent } from './page-comande/page-comande.component';





@NgModule({
  declarations: [
  PagesComponent,
  PageAjouterProduitComponent, 
  PageBeauteComponent,
  PageBienEtreComponent ,
  PageBoissonComponent, 
  PageCerealeComponent,
  PageContactComponent, 
  PageEnfantsComponent ,
  PageEpicesComponent,
  PageGererProduitComponent,
  PageLegumesComponent ,
  PageListeClientsComponent,
  PageModifierProduitComponent,
  PagePanierComponent,
  PageSupprimerProduitComponent,
  PageInscriptionComponent,
  PageComandeComponent


  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
   

  ],
  providers: [
     PageService
  ],
})
export class PagesModule { }
