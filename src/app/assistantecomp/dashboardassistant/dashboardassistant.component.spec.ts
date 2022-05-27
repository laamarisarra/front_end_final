import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardassistantComponent } from './dashboardassistant.component';

describe('DashboardassistantComponent', () => {
  let component: DashboardassistantComponent;
  let fixture: ComponentFixture<DashboardassistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardassistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
