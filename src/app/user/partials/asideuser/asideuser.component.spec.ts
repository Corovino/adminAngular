import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideuserComponent } from './asideuser.component';

describe('AsideuserComponent', () => {
  let component: AsideuserComponent;
  let fixture: ComponentFixture<AsideuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
