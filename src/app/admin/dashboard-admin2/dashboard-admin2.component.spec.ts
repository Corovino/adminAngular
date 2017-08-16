import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmin2Component } from './dashboard-admin2.component';

describe('DashboardAdmin2Component', () => {
  let component: DashboardAdmin2Component;
  let fixture: ComponentFixture<DashboardAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
