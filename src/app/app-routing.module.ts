import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './guards/auth.gard';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  {path: '', component:PageAccueilComponent},
  {path: 'accueil', component:PageAccueilComponent},
  { path: '',  loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule) },
  { path: 'connexion', component:ConnexionComponent},
  { path: '**', redirectTo: '/accueil' }//page echec
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
