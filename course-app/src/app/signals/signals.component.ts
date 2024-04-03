import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);

  constructor() {
    console.log(this.count());
    this.count.set(5);
    console.log(this.count());
    this.count.update(value => value += 1);
    console.log(this.count());
  }

  resetValue() {
    this.count.set(0);
  }

  incrementValue() {
    this.count.update(value => value += 1);
  }

}
