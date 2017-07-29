import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitionlistComponent } from './permitionlist.component';

describe('PermitionlistComponent', () => {
  let component: PermitionlistComponent;
  let fixture: ComponentFixture<PermitionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
