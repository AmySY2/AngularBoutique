import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEpicesComponent } from './page-epices.component';

describe('PageEpicesComponent', () => {
  let component: PageEpicesComponent;
  let fixture: ComponentFixture<PageEpicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEpicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEpicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
