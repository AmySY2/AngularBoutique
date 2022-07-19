import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLegumesComponent } from './page-legumes.component';

describe('PageLegumesComponent', () => {
  let component: PageLegumesComponent;
  let fixture: ComponentFixture<PageLegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLegumesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
