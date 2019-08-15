import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlepaymentComponent } from './handlepayment.component';

describe('HandlepaymentComponent', () => {
  let component: HandlepaymentComponent;
  let fixture: ComponentFixture<HandlepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
