import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorepatientComponent } from './scorepatient.component';

describe('ScorepatientComponent', () => {
  let component: ScorepatientComponent;
  let fixture: ComponentFixture<ScorepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
