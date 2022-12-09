import { TestBed } from '@angular/core/testing';

import { ValorantService } from './valorant.service';

describe('ValorantService', () => {
  let service: ValorantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
