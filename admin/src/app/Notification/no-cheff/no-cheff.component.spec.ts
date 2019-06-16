import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCheffComponent } from './no-cheff.component';

describe('NoCheffComponent', () => {
  let component: NoCheffComponent;
  let fixture: ComponentFixture<NoCheffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCheffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
