import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LiveMatchStatsService } from './live-match-stats.service';

describe('LiveMatchStatsService', () => {
  let service: LiveMatchStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LiveMatchStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
