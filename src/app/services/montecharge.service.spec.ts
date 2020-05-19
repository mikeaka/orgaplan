import { TestBed } from '@angular/core/testing';

import { MontechargeService } from './montecharge.service';

describe('MontechargeService', () => {
  let service: MontechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
