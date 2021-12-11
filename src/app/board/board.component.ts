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

  ngOnInit(): void {
    this.newGame();
  }

  public newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  public makeMove(position: number) {
    if(!this.squares[position] && !this.winner) {
      this.drawPlayer(position);
      this.togglePlayer();
    }
  }

  private drawPlayer(position: number) {
    this.squares.splice(position, 1, this.player);
  }

  private togglePlayer() {
    if(!this.winner)
      this.xIsNext = !this.xIsNext;
  }

  private checkLine(line: [number, number, number]) {
    const [a, b, c] = line;
    return this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c];
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  get winner(): Player | null {
    for(const line of this.winnerLines) {
      if(this.checkLine(line))
        return this.player;
    }
    return null;
  }
}
