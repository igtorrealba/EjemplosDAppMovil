import { TestBed } from '@angular/core/testing';

import { GeolocacionService } from './geolocacion.service';

describe('GeolocacionService', () => {
  let service: GeolocacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
