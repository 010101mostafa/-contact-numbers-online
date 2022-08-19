import { TestBed } from '@angular/core/testing';

import { UerService } from './user.service';

describe('UerService', () => {
  let service: UerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
