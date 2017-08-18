import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUser2Component } from './dashboard-user2.component';

describe('DashboardUser2Component', () => {
  let component: DashboardUser2Component;
  let fixture: ComponentFixture<DashboardUser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
