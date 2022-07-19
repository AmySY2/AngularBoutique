import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienEtreComponent } from './page-bien-etre.component';

describe('PageBienEtreComponent', () => {
  let component: PageBienEtreComponent;
  let fixture: ComponentFixture<PageBienEtreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBienEtreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBienEtreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
