import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsNavComponent } from './ins-nav.component';

describe('InsNavComponent', () => {
  let component: InsNavComponent;
  let fixture: ComponentFixture<InsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
