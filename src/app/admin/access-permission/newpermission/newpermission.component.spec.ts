import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpermissionComponent } from './newpermission.component';

describe('NewpermissionComponent', () => {
  let component: NewpermissionComponent;
  let fixture: ComponentFixture<NewpermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
