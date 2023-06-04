import { TestBed } from '@angular/core/testing';

import { WaypointDataService } from './waypoint-data.service';

describe('WaypointDataService', () => {
  let service: WaypointDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaypointDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
