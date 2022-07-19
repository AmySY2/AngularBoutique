import { Component } from '@angular/core';
import { TokenIdentificationService } from './services/token-identification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boutique';

  constructor(private tokenIdentification : TokenIdentificationService){}

  ngOnInit(){ //on va observer les donné
      this.tokenIdentification.raffraichir();
  }
}
