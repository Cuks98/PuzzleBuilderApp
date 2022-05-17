import { Component, OnInit, OnDestroy } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { GameDBService } from '../gamedb.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  readonly imagesPerCategory = 20;
  readonly secondsInAMinute = 60;  
  private intervalId: any;
  private categoryId: number = -1;
  private seconds: number = 0;
  folder: string = "";
  image: number = 0;
  over: boolean = false;
  time: string = '';
  moves: number = 0;
  fails: number = 0;
  goal: string = "";
  end: string = "";

  constructor(private dictionary: DictionaryService, private gamedb: GameDBService) {}

  ngOnInit(): void {    
  }

  ngOnDestroy(): void {
  }
    
  refreshTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.over){
        clearInterval(this.intervalId);
      }else{
        this.seconds++;
        let minutes = Math.floor(this.seconds / this.secondsInAMinute);
        let seconds = this.seconds % this.secondsInAMinute + 's';
        this.time =  minutes ? minutes + 'm '  + seconds : seconds;
      }
    }, 1000);
  }

  reset(): void {
    this.moves = 0
    this.fails = 0;
    this.over = false;
    this.seconds = 0;
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
    this.refreshTimer();
  }

  onCategoryChange(category: { categoryId: number; folder: string; }): void {
   this.categoryId = category.categoryId;
   this.folder = category.folder;
   this.reset();
   this.image = Math.floor(Math.random() * this.imagesPerCategory);
  }

  onImageChange(image: number): void {
    this.image = image;
    this.reset();
  }

  onStatsChange(event: any): void {
    this.moves = event.moves;
    this.fails = event.fails;
    this.over = event.over;
    this.save();
  }

  save(): void {
    console.log("fuck")
    // if (this.over) {
    //     this.gamedb.save({
    //       categoryId: this.categoryId,
    //       folder: this.folder,
    //       image: this.image,
    //       time: this.time,
    //       moves: this.moves,
    //       fails: this.fails
    //     })
    // }
  }

}
