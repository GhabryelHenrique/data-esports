/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameFrameService } from './gameFrame.service';

describe('Service: GameFrame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameFrameService]
    });
  });

  it('should ...', inject([GameFrameService], (service: GameFrameService) => {
    expect(service).toBeTruthy();
  }));
});
