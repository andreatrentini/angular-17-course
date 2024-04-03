import { Component, effect, signal } from '@angular/core';
import { SignalsComponent } from '../signals/signals.component';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent extends SignalsComponent{  

  constructor() {
    super();
    effect(() => {
      console.log('Actual value of count: ', this.count());
    })
  }
}
