import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPacientRepositoryComponent } from './test-pacient-repository.component';

describe('TestPacientRepositoryComponent', () => {
  let component: TestPacientRepositoryComponent;
  let fixture: ComponentFixture<TestPacientRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPacientRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPacientRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
