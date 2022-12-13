import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LolMatchesComponent } from './lol-matches.component';

describe('LolMatchesComponent', () => {
  let component: LolMatchesComponent;
  let fixture: ComponentFixture<LolMatchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LolMatchesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
