import { TestBed } from '@angular/core/testing';

import { QueryServiveService } from './query-servive.service';

describe('QueryServiveService', () => {
  let service: QueryServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
