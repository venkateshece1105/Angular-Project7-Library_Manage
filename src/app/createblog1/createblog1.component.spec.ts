import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createblog1Component } from './createblog1.component';

describe('Createblog1Component', () => {
  let component: Createblog1Component;
  let fixture: ComponentFixture<Createblog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createblog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createblog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
