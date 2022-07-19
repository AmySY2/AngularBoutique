import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBoissonComponent } from './page-boisson.component';

describe('PageBoissonComponent', () => {
  let component: PageBoissonComponent;
  let fixture: ComponentFixture<PageBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBoissonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
