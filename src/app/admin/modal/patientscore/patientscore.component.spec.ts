import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientscoreComponent } from './patientscore.component';

describe('PatientscoreComponent', () => {
  let component: PatientscoreComponent;
  let fixture: ComponentFixture<PatientscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
