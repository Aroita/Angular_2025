import { Component } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  template: `
  <h1>Counter: {{counter}}</h1>
  <button (click)="incrementar(1)">+1</button>
  <button (click)="restarle(1)">-1</button>


  `,
  styles: []
})

export class CounterPageComponent {

  counter = 10;

  incrementar(value: number) {
    this.counter += value;
  }

  restarle(value: number) {
    this.counter -= value;
  }

}
