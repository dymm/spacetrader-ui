import { TestBed } from '@angular/core/testing';

import { ShipDataService } from './ship-data.service';

describe('ShipDataService', () => {
  let service: ShipDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
