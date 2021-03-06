import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemenuComponent } from './tablemenu.component';

describe('TablemenuComponent', () => {
  let component: TablemenuComponent;
  let fixture: ComponentFixture<TablemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
