import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeagueOfLegendsComponent } from './league-of-legends.component';
import { MatchesService } from './services/matches/matches.service';

describe('LeagueOfLegendsComponent', () => {
  let component: LeagueOfLegendsComponent;
  let fixture: ComponentFixture<LeagueOfLegendsComponent>;
  let matchService: MatchesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueOfLegendsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueOfLegendsComponent);
    matchService = TestBed.inject(MatchesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
