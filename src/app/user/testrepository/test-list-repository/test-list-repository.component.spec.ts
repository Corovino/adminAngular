import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListRepositoryComponent } from './test-list-repository.component';

describe('TestListRepositoryComponent', () => {
  let component: TestListRepositoryComponent;
  let fixture: ComponentFixture<TestListRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
