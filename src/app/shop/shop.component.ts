import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../puzzle';
import { PuzzleService } from '../puzzleService';
import {TreeNode} from 'primeng/api';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  files!: Puzzle[];
  val: number = 1;

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];

  constructor(private puzzleService: PuzzleService) { }

  async ngOnInit() {
      const bla$ = this.puzzleService.getFilesystem();
      const files = await lastValueFrom(bla$);
      this.files = files;
      console.log(this.files)
  }

}
