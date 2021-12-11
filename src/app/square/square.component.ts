import { Component, Input, OnInit } from '@angular/core';
import Player from 'src/types/Player';

@Component({
  selector: 'app-square',
  template: `
  <div [ngClass]="{'square-x': player === 'X', 'square-o' : player === 'O' }">
    <p>
      {{player}}
    </p>
  </div>
  `,
  styles: [
    `div { 
      height: 100%; 
      width: 100%; 
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
    ".square-x { background: green; } ",
    ".square-o { background: orange; } ",
  ]
})
export class SquareComponent  {
 
  @Input() player: Player;
}
