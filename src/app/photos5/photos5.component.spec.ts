import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos5Component } from './photos5.component';

describe('Photos5Component', () => {
  let component: Photos5Component;
  let fixture: ComponentFixture<Photos5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photos5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photos5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
