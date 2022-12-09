import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGamesComponent } from './schedule-games.component';

describe('ScheduleGamesComponent', () => {
  let component: ScheduleGamesComponent;
  let fixture: ComponentFixture<ScheduleGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
