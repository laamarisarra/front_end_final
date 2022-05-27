import { TestBed } from '@angular/core/testing';

import { ListemedadService } from './listemedad.service';

describe('ListemedadService', () => {
  let service: ListemedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListemedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
