import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffSidebarComponent } from './cheff-sidebar.component';

describe('CheffSidebarComponent', () => {
  let component: CheffSidebarComponent;
  let fixture: ComponentFixture<CheffSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheffSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
