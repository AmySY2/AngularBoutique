import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererProduitComponent } from './page-gerer-produit.component';

describe('PageGererProduitComponent', () => {
  let component: PageGererProduitComponent;
  let fixture: ComponentFixture<PageGererProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGererProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGererProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
