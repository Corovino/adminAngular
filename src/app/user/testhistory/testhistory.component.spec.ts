import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthistoryComponent } from './testhistory.component';

describe('TesthistoryComponent', () => {
  let component: TesthistoryComponent;
  let fixture: ComponentFixture<TesthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
