import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCouroselComponent } from './vertical-courosel.component';

describe('VerticalCouroselComponent', () => {
  let component: VerticalCouroselComponent;
  let fixture: ComponentFixture<VerticalCouroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCouroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCouroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
