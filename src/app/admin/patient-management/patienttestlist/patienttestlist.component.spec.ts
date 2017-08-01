import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienttestlistComponent } from './patienttestlist.component';

describe('PatienttestlistComponent', () => {
  let component: PatienttestlistComponent;
  let fixture: ComponentFixture<PatienttestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienttestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienttestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
