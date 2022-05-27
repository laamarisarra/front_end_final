import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifpatientComponent } from './notifpatient.component';

describe('NotifpatientComponent', () => {
  let component: NotifpatientComponent;
  let fixture: ComponentFixture<NotifpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
