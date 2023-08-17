import { TestBed } from '@angular/core/testing';

import { WeekOneService } from './week-one.service';

describe('WeekOneService', () => {
    let service: WeekOneService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WeekOneService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
