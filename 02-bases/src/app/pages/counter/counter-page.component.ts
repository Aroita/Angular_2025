import { Component } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px;
      width: 100px;

  }`
})

export class CounterPageComponent {

  counter = 10;

  incrementar(value: number) {
    this.counter += value;  //va incrementado en 1 el valor de counter
  }

  restarle(value: number) {
    this.counter -= value;  //va decrementando en -1 el valor de counter
  }

  resetear() {
    this.counter = 10;  //resetea el valor de counter a 10
  }

}
