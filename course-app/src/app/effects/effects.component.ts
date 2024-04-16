import { Component, effect, signal } from '@angular/core';
import { SignalsComponent } from '../signals/signals.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [FormsModule],
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
