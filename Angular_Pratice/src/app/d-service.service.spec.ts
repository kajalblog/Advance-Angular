import { TestBed } from '@angular/core/testing';

import { DServiceService } from './d-service.service';

describe('DServiceService', () => {
  let service: DServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
