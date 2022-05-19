import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Puzzle } from '../puzzle';
import { PuzzleService } from '../puzzleService';

@Component({
  selector: 'app-browse-puzzle',
  templateUrl: './browse-puzzle.component.html',
  styleUrls: ['./browse-puzzle.component.css']
})
export class BrowsePuzzleComponent implements OnInit {

  puzzles: Puzzle[] = [];
  puzles: Puzzle[] = [];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  sortKey!: string;

  
  constructor(private http: HttpClient, private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
    this.puzzleService.getFilesystem().subscribe(
      puzzles => {
        this.puzzles = puzzles;
        this.puzles = puzzles;
        console.log(this.puzzles[0].image);
      
    })
    console.log(this.puzles);
  }

  onSortChange(event: any) {
    let value = event.value;
    console.log(value)

    if (value.indexOf('!') === 0) {
        // this.sortOrder = -1;
        // this.sortField = value.substring(1, value.length);
        this.puzles.sort((n1, n2) => {
          if(n1.price < n2.price){
            return 1;
          }else{
            return -1;
          }
          return 0
        })
    }
    else {
      this.puzles.sort((n1, n2) => {
        if(n1.price > n2.price){
          return 1;
        }else{
          return -1;
        }
        return 0
      })
    }
}

}
