import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeauteComponent } from './page-beaute.component';

describe('PageBeauteComponent', () => {
  let component: PageBeauteComponent;
  let fixture: ComponentFixture<PageBeauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBeauteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBeauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
