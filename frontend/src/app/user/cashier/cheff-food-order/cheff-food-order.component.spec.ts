import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffFoodOrderComponent } from './cheff-food-order.component';

describe('CheffFoodOrderComponent', () => {
  let component: CheffFoodOrderComponent;
  let fixture: ComponentFixture<CheffFoodOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheffFoodOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
