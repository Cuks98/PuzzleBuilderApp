import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

type Piece = {index: number, id: number, misplaced: boolean, path: string};

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  readonly rows: number = 4;
  readonly columns: number = 4;
  readonly numberOfPieces: number = this.rows * this.columns;
  private moves: number = 0;
  private fails: number = 0;
  over: boolean = false;
  pieces: Array<Piece> = [];
  
  @Input() folder!: string;
  @Input() image!: number;
  @Output() statsChange = new EventEmitter();

  ngOnInit(): void {
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (((changes['folder'] && changes['folder'].currentValue) || 
         (changes['image'] && changes['image'].currentValue)) && this.pieces.length){
       this.reset();
    }
  } 

  private reset(): void {
    this.moves = 0;
    this.fails = 0;
    this.shufflePieces();
    while (this.numberOfPiecesInPlace > 0){
      this.shufflePieces();
    }
  }

  private get numberOfPiecesInPlace(): number {
    return this.pieces.reduce((inPlace, piece, i) => {
      return (piece.id === i ) ? inPlace + 1 : inPlace
    }, 0)
  }

  private shufflePieces(): void {
    debugger;
    let pieces: Array<Piece> = new Array(this.numberOfPieces);
    let random: number;
    let visited: Array<number> = [];
    let path: string = '';

    for (let i = 0; i < this.numberOfPieces; i++){
      random = Math.floor(Math.random() * this.numberOfPieces);
      while (visited.indexOf(random) !== -1){
        random = Math.floor(Math.random() * this.numberOfPieces);
      }
      visited.push(random);
      path = `url(https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${this.folder}%2F${this.image}%2F${random}.jpg?alt=media)`;
      //url(https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2Fvancouver%2F14%2F14.jpg?alt=media)
      pieces[i] = {index: i, id: random, misplaced: true, path};
    }
    this.pieces = pieces;
  }

  private isOver(): boolean {
    this.over = this.numberOfPiecesInPlace === this.numberOfPieces;
    return this.over;
  }
 
  private swap(dragged: Piece, dropped: Piece, field: string): void {
    debugger;
    // let temp: number = dragged.id;
    // dragged.id = dropped.id;
    // dropped.id= temp;
    // let temp: Piece = dragged;
    // dragged = dropped;
    // dropped = temp;
    if(field === "id"){
      let temp: number = dragged.id;
      dragged.id = dropped.id;
      dropped.id= temp;
    }else{
      let temp: string = dragged.path;
      dragged.path = dropped.path;
      dropped.path= temp;
    }
  }

  private swapPieces(dragged: Piece, dropped: Piece): void {
    this.swap(dragged, dropped, 'id');
    this.swap(dragged, dropped, 'path');
  }

  private misplacedCheck(piece: Piece): void {
    piece.misplaced = !(piece.id === piece.index);
    if (piece.misplaced) {
      this.fails++;
    }
  }

  private misplacedPiecesCheck(dragged: Piece, dropped: Piece): void {
    this.misplacedCheck(dragged);
    this.misplacedCheck(dropped);
  }

  private dragAndDrop(dragged: Piece, dropped: Piece): void {
    if (!this.isOver() && dragged !== dropped){
      this.swapPieces(dragged, dropped);
      this.misplacedPiecesCheck(dragged, dropped);
      this.statsChange.emit({moves: ++this.moves, fails: this.fails, over: this.isOver()});
    }
  }

  onDrag(ev: any): void {
    ev.dataTransfer.setData("index", ev.target.id);
  }

  onDrop(ev: any): void {
      ev.preventDefault();
      this.dragAndDrop(this.pieces[ev.dataTransfer.getData("index")], this.pieces[ev.target.id]);
  }

  onDragOver(ev: any): void {
    ev.preventDefault();
  }

}
