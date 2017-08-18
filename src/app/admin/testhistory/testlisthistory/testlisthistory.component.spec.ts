import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlisthistoryComponent } from './testlisthistory.component';

describe('TestlisthistoryComponent', () => {
  let component: TestlisthistoryComponent;
  let fixture: ComponentFixture<TestlisthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlisthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlisthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
