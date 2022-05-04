import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePuzzleComponent } from './browse-puzzle.component';

describe('BrowsePuzzleComponent', () => {
  let component: BrowsePuzzleComponent;
  let fixture: ComponentFixture<BrowsePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
