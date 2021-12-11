import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <div [ngClass]="{'square-x': value === 'X', 'square-o' : value === 'O' }">
    <p>
      {{value}}
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
    ".square-o { background: blue; }",
  ]
})
export class SquareComponent  {
 
  @Input() value: 'X' | 'O';
}
