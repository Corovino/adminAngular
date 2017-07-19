import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPermitionComponent } from './access-permition.component';

describe('AccessPermitionComponent', () => {
  let component: AccessPermitionComponent;
  let fixture: ComponentFixture<AccessPermitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPermitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPermitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
