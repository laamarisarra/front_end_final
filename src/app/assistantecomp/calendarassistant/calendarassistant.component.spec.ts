import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarassistantComponent } from './calendarassistant.component';

describe('CalendarassistantComponent', () => {
  let component: CalendarassistantComponent;
  let fixture: ComponentFixture<CalendarassistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarassistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
