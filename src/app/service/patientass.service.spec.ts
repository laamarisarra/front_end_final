import { TestBed } from '@angular/core/testing';

import { PatientassService } from './patientass.service';

describe('PatientassService', () => {
  let service: PatientassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
