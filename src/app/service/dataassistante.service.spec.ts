import { TestBed } from '@angular/core/testing';

import { DataassistanteService } from './dataassistante.service';

describe('DataassistanteService', () => {
  let service: DataassistanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataassistanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
