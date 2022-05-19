import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Puzzle} from '../puzzle';
import { PuzzleService } from '../puzzleService';
import { ImageServiceService } from '../image-service.service';
@Component({
  selector: 'app-vertical-courosel',
  templateUrl: './vertical-courosel.component.html',
  styleUrls: ['./vertical-courosel.component.css']
})
export class VerticalCouroselComponent implements OnInit {

  images: string[] = [];
  imagesShow: string[]=[];

  constructor(private http: HttpClient, private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe({
      next: images => {
        this.images = images;
        this.imagesShow = images;
        console.log(this.imagesShow[0]);
      }
    })
  }

}
