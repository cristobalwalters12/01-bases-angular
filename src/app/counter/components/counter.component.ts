import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>este es mi counter {{ counter }}</h2>
    <button (click)="increasebyone(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increasebyone(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increasebyone(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
