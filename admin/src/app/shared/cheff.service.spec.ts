import { TestBed } from '@angular/core/testing';

import { CheffService } from './cheff.service';

describe('CheffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheffService = TestBed.get(CheffService);
    expect(service).toBeTruthy();
  });
});
