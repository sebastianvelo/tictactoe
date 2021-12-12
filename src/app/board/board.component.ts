import { Component, OnInit } from '@angular/core';
import Player from 'src/types/Player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: (Player)[];
  xIsNext: boolean;
  readonly winnerLines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  ngOnInit(): void {
    this.resetGame();
  }

  public resetGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  public move(position: number) {
    if(!this.squares[position] && !this.winner) {
      this.drawPlayer(position);
      this.togglePlayer();
    }
  }

  private hasWin(line: number[]) {
    const [a, b, c] = line;
    return this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c];
  }

  private drawPlayer(position: number) {
    this.squares.splice(position, 1, this.player);
  }

  private togglePlayer() {
    if(!this.winner)
      this.xIsNext = !this.xIsNext;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  get winner(): Player | null {
    for(const line of this.winnerLines) {
      if(this.hasWin(line))
        return this.player;
    }
    return null;
  }

  get draw(): boolean {
    return !this.winner && this.squares.every(square => square);
  }
}
