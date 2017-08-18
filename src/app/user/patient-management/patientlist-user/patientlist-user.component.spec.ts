import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlistUserComponent } from './patientlist-user.component';

describe('PatientlistUserComponent', () => {
  let component: PatientlistUserComponent;
  let fixture: ComponentFixture<PatientlistUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientlistUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
