import { TestBed } from '@angular/core/testing';

import { WeekTwoService } from './week-two.service';

describe('WeekTwoService', () => {
  let service: WeekTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
