import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigninstructorComponent } from './asigninstructor.component';

describe('AsigninstructorComponent', () => {
  let component: AsigninstructorComponent;
  let fixture: ComponentFixture<AsigninstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigninstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigninstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
