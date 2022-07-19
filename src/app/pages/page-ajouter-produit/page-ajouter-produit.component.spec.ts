import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterProduitComponent } from './page-ajouter-produit.component';

describe('PageAjouterProduitComponent', () => {
  let component: PageAjouterProduitComponent;
  let fixture: ComponentFixture<PageAjouterProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAjouterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
