import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos4Component } from './photos4.component';

describe('Photos4Component', () => {
  let component: Photos4Component;
  let fixture: ComponentFixture<Photos4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photos4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
