import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interseptor';
import { TokenIdentificationService } from './services/token-identification.service';
import { AuthService } from './services/auth.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';


/////////////

/////////////////
@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    ConnexionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    PagesModule,
  
  ////////////////////


  ////////////////////////
  
  ],




  providers: [
    {provide : LocationStrategy, useClass : HashLocationStrategy},
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},

    TokenIdentificationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
