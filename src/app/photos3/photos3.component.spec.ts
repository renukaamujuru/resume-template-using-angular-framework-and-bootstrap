import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos3Component } from './photos3.component';

describe('Photos3Component', () => {
  let component: Photos3Component;
  let fixture: ComponentFixture<Photos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
