import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedadComponent } from './liste-medad.component';

describe('ListeMedadComponent', () => {
  let component: ListeMedadComponent;
  let fixture: ComponentFixture<ListeMedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
