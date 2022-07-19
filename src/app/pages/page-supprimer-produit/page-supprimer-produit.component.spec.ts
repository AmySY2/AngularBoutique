import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupprimerProduitComponent } from './page-supprimer-produit.component';

describe('PageSupprimerProduitComponent', () => {
  let component: PageSupprimerProduitComponent;
  let fixture: ComponentFixture<PageSupprimerProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSupprimerProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSupprimerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
