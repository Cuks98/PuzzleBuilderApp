import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-puzzle',
  templateUrl: './build-puzzle.component.html',
  styleUrls: ['./build-puzzle.component.css']
})
export class BuildPuzzleComponent implements OnInit {

  displayModal: boolean = false;
  checkedBox: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  shareBtnClick(){
    this.displayModal = true
  }
  chackBoxClick(){
    this.checkedBox= !this.checkedBox;
    console.log(this.checkedBox);
    if(this.checkedBox){
      (<HTMLDivElement>document.getElementById('publicShareOptions')).style.display="block";
    }else{
      (<HTMLDivElement>document.getElementById('publicShareOptions')).style.display="none";
    }
  
  }
}
