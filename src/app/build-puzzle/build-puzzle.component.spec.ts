import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPuzzleComponent } from './build-puzzle.component';

describe('BuildPuzzleComponent', () => {
  let component: BuildPuzzleComponent;
  let fixture: ComponentFixture<BuildPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
