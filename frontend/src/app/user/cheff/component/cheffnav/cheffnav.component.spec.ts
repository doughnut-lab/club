import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffnavComponent } from './cheffnav.component';

describe('CheffnavComponent', () => {
  let component: CheffnavComponent;
  let fixture: ComponentFixture<CheffnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheffnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
