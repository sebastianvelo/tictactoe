import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string | null;
  readonly winnerLines: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  makeMove(idx: number) {
    if(!this.squares[idx] && !this.winner) {
      this.drawFigure(idx);
      this.winner = this.calculateWinner();
      this.togglePlayer();
    }
  }

  private drawFigure(idx: number) {
    this.squares.splice(idx, 1, this.player);
  }

  private togglePlayer() {
    this.xIsNext = !this.xIsNext;
  }

  private calculateWinner(): string | null {
    for(const line of this.winnerLines) {
      if(this.checkLine(line))
        return this.player;
    }
    return null;
  }

  private checkLine(line: [number, number, number]) {
    const [a, b, c] = line;
    return this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c];
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
}
