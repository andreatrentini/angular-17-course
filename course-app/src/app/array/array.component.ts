import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
  namesSignal = signal<string[]>([]);

  addName(name: string) {
    this.namesSignal.update(current => [...current, name]);
  }
}
