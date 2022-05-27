import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientadComponent } from './liste-patientad.component';

describe('ListePatientadComponent', () => {
  let component: ListePatientadComponent;
  let fixture: ComponentFixture<ListePatientadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePatientadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
