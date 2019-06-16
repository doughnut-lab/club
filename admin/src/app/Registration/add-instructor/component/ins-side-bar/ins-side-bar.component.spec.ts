import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsSideBarComponent } from './ins-side-bar.component';

describe('InsSideBarComponent', () => {
  let component: InsSideBarComponent;
  let fixture: ComponentFixture<InsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
