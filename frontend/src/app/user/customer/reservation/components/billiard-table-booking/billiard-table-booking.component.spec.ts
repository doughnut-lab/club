import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliardTableBookingComponent } from './billiard-table-booking.component';

describe('BilliardTableBookingComponent', () => {
  let component: BilliardTableBookingComponent;
  let fixture: ComponentFixture<BilliardTableBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilliardTableBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliardTableBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
