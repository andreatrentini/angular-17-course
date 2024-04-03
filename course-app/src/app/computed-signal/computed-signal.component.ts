import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  calculate = signal(false);
  conditionalCalculated = computed(() => {
    if (this.calculate()) {
      return this.count() * 2;
    }
    else {
      return -1;
    }
  })

  incrementValue() {
    this.count.update(value => value += 1);
  }

  resetValue() {
    this.count.set(0);
  }
}
