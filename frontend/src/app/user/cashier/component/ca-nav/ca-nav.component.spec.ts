import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaNavComponent } from './ca-nav.component';

describe('CaNavComponent', () => {
  let component: CaNavComponent;
  let fixture: ComponentFixture<CaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
