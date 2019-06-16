import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsNotificationComponent } from './ins-notification.component';

describe('InsNotificationComponent', () => {
  let component: InsNotificationComponent;
  let fixture: ComponentFixture<InsNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
