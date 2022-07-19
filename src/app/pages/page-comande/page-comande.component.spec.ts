import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComandeComponent } from './page-comande.component';

describe('PageComandeComponent', () => {
  let component: PageComandeComponent;
  let fixture: ComponentFixture<PageComandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageComandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
