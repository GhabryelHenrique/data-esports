import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantMatchesLiveComponent } from './valorant-matches-live.component';

describe('ValorantMatchesLiveComponent', () => {
  let component: ValorantMatchesLiveComponent;
  let fixture: ComponentFixture<ValorantMatchesLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantMatchesLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantMatchesLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
