import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienttestlistUserComponent } from './patienttestlist-user.component';

describe('PatienttestlistUserComponent', () => {
  let component: PatienttestlistUserComponent;
  let fixture: ComponentFixture<PatienttestlistUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienttestlistUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienttestlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
