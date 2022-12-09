/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScheduleGamesService } from './schedule-games.service';

describe('Service: ScheduleGames', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleGamesService]
    });
  });

  it('should ...', inject([ScheduleGamesService], (service: ScheduleGamesService) => {
    expect(service).toBeTruthy();
  }));
});
