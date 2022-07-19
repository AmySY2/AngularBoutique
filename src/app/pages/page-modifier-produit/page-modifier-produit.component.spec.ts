import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierProduitComponent } from './page-modifier-produit.component';

describe('PageModifierProduitComponent', () => {
  let component: PageModifierProduitComponent;
  let fixture: ComponentFixture<PageModifierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
