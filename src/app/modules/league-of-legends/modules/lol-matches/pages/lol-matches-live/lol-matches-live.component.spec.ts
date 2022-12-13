import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolMatchesLiveComponent } from './lol-matches-live.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LolMatchesLiveComponent', () => {
  let component: LolMatchesLiveComponent;
  let fixture: ComponentFixture<LolMatchesLiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LolMatchesLiveComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolMatchesLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
