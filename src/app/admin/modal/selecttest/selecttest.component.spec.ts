import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttestComponent } from './selecttest.component';

describe('SelecttestComponent', () => {
  let component: SelecttestComponent;
  let fixture: ComponentFixture<SelecttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
