import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../puzzle';
import { PuzzleService } from '../puzzleService';

@Component({
  selector: 'app-courosel2',
  templateUrl: './courosel2.component.html',
  styleUrls: ['./courosel2.component.css']
})
export class Courosel2Component implements OnInit {

  puzzles: Puzzle[] = [];
  puzles: Puzzle[] = [];
  responsiveOptions;
  constructor(private http: HttpClient, private puzzleService: PuzzleService) {
    this.responsiveOptions=[
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit():void {
    this.puzzleService.getBestSelingPuzzles().subscribe({
      next: puzzles => {
        this.puzzles = puzzles;
        this.puzles = puzzles;
        console.log(this.puzzles[0].image);
      },
      error: err => console.error(err)
    })
    console.log(this.puzles);
  }

}
