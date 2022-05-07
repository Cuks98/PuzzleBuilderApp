import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Puzzle} from '../puzzle';
import { PuzzleService } from '../puzzleService';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
@Component({
  selector: 'app-courosel',
  templateUrl: './courosel.component.html',
  styleUrls: ['./courosel.component.css']
})
export class CouroselComponent implements OnInit {

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
    this.puzzleService.getMostPlayedPuzzles().subscribe({
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
