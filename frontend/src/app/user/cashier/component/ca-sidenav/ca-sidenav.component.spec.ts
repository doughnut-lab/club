import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaSidenavComponent } from './ca-sidenav.component';

describe('CaSidenavComponent', () => {
  let component: CaSidenavComponent;
  let fixture: ComponentFixture<CaSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
