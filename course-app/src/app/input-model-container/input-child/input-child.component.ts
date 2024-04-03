import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {
  name = input<string>();
  surname = input.required<string>();
  age = input<number>(18);
}
