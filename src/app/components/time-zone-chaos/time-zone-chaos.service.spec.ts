import { TestBed } from '@angular/core/testing';

import { TimeZoneChaosService } from './time-zone-chaos.service';

describe('TimeZoneChaosService', () => {
  let service: TimeZoneChaosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeZoneChaosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
