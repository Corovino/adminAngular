import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAdminComponent } from './asideadmin.component';

describe('AsideComponent', () => {
  let component: AsideAdminComponent;
  let fixture: ComponentFixture<AsideAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
