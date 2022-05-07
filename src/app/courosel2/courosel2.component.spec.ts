import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courosel2Component } from './courosel2.component';

describe('Courosel2Component', () => {
  let component: Courosel2Component;
  let fixture: ComponentFixture<Courosel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courosel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Courosel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
