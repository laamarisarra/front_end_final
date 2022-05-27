import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimepatientComponent } from './alimepatient.component';

describe('AlimepatientComponent', () => {
  let component: AlimepatientComponent;
  let fixture: ComponentFixture<AlimepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
