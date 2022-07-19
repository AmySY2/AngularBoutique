import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnfantsComponent } from './page-enfants.component';

describe('PageEnfantsComponent', () => {
  let component: PageEnfantsComponent;
  let fixture: ComponentFixture<PageEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEnfantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
