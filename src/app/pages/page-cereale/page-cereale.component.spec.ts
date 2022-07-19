import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCerealeComponent } from './page-cereale.component';

describe('PageCerealeComponent', () => {
  let component: PageCerealeComponent;
  let fixture: ComponentFixture<PageCerealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCerealeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCerealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
