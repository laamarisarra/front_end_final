import { TestBed } from '@angular/core/testing';

import { ListepatiadService } from './listepatiad.service';

describe('ListepatiadService', () => {
  let service: ListepatiadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListepatiadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
