import { TestBed } from '@angular/core/testing';

import { ListeassistadService } from './listeassistad.service';

describe('ListeassistadService', () => {
  let service: ListeassistadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeassistadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
