import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAssistadComponent } from './liste-assistad.component';

describe('ListeAssistadComponent', () => {
  let component: ListeAssistadComponent;
  let fixture: ComponentFixture<ListeAssistadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAssistadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAssistadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
