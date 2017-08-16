import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpatientComponent } from './testpatient.component';

describe('TestpatientComponent', () => {
  let component: TestpatientComponent;
  let fixture: ComponentFixture<TestpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
