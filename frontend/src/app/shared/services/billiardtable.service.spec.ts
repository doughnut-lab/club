import { TestBed } from '@angular/core/testing';

import { BilliardtableService } from './billiardtable.service';

describe('BilliardtableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilliardtableService = TestBed.get(BilliardtableService);
    expect(service).toBeTruthy();
  });
});
