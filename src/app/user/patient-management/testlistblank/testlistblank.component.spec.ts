import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlistblankComponent } from './testlistblank.component';

describe('TestlistblankComponent', () => {
  let component: TestlistblankComponent;
  let fixture: ComponentFixture<TestlistblankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlistblankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlistblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
