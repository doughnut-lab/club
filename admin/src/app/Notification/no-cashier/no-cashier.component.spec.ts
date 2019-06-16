import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCashierComponent } from './no-cashier.component';

describe('NoCashierComponent', () => {
  let component: NoCashierComponent;
  let fixture: ComponentFixture<NoCashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCashierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
