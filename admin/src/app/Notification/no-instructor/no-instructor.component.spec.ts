import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInstructorComponent } from './no-instructor.component';

describe('NoInstructorComponent', () => {
  let component: NoInstructorComponent;
  let fixture: ComponentFixture<NoInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
