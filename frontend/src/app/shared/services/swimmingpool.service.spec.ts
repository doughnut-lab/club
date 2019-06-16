import { TestBed } from '@angular/core/testing';

import { SwimmingpoolService } from './swimmingpool.service';

describe('SwimmingpoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwimmingpoolService = TestBed.get(SwimmingpoolService);
    expect(service).toBeTruthy();
  });
});
