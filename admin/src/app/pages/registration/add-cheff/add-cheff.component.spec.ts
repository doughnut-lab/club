import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheffComponent } from './add-cheff.component';

describe('AddCheffComponent', () => {
  let component: AddCheffComponent;
  let fixture: ComponentFixture<AddCheffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
