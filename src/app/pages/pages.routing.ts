import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { PageAjouterProduitComponent } from './page-ajouter-produit/page-ajouter-produit.component';
import { PageBeauteComponent } from './page-beaute/page-beaute.component';
import { PageBienEtreComponent } from './page-bien-etre/page-bien-etre.component';
import { PageBoissonComponent } from './page-boisson/page-boisson.component';
import { PageCerealeComponent } from './page-cereale/page-cereale.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEnfantsComponent } from './page-enfants/page-enfants.component';
import { PageEpicesComponent } from './page-epices/page-epices.component';
import { PageGererProduitComponent } from './page-gerer-produit/page-gerer-produit.component';
import { PageLegumesComponent } from './page-legumes/page-legumes.component';
import { PageListeClientsComponent } from './page-liste-clients/page-liste-clients.component';
import { PageModifierProduitComponent } from './page-modifier-produit/page-modifier-produit.component';
import { PagePanierComponent } from './page-panier/page-panier.component';
import { PageSupprimerProduitComponent } from './page-supprimer-produit/page-supprimer-produit.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { PageAccueilComponent } from '../page-accueil/page-accueil.component';
import { PageComandeComponent } from './page-comande/page-comande.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PagesComponent,
        children: [
          {path: 'ajouter-produit', component:PageAjouterProduitComponent},
          {path: 'beaute', component:PageBeauteComponent},
          {path: 'bien-etre', component:PageBienEtreComponent},
          {path: 'boissons', component : PageBoissonComponent},
          {path:'cereales', component:PageCerealeComponent},
          {path: 'contacts', component: PageContactComponent},
          {path: 'enfants', component: PageEnfantsComponent},
          {path: 'epices', component: PageEpicesComponent},
          {path: 'gerer-produit', component: PageGererProduitComponent},
          {path: 'inscriptions', component:PageInscriptionComponent},
          {path: 'legumes', component: PageLegumesComponent},
          {path: 'liste-clients', component: PageListeClientsComponent},
          {path: 'modifier-produit', component: PageModifierProduitComponent},
          {path: 'panier', component: PagePanierComponent},
          {path: 'supprimer-produit', component: PageSupprimerProduitComponent},
          {path: 'comande', component: PageComandeComponent},

        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
