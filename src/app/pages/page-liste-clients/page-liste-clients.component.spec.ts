import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeClientsComponent } from './page-liste-clients.component';

describe('PageListeClientsComponent', () => {
  let component: PageListeClientsComponent;
  let fixture: ComponentFixture<PageListeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
