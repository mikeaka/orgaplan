import { TestBed } from '@angular/core/testing';

import { GrueService } from './grue.service';

describe('GrueService', () => {
  let service: GrueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
