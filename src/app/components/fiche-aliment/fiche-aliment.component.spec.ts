import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAlimentComponent } from './fiche-aliment.component';

describe('FicheAlimentComponent', () => {
  let component: FicheAlimentComponent;
  let fixture: ComponentFixture<FicheAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAlimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
