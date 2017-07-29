import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpermitionComponent } from './newpermition.component';

describe('NewpermitionComponent', () => {
  let component: NewpermitionComponent;
  let fixture: ComponentFixture<NewpermitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpermitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpermitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
