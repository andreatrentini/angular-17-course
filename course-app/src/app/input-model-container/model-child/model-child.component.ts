import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-child.component.html',
  styleUrl: './model-child.component.css'
})
export class ModelChildComponent {
  name = model<string>();
  surname = model.required<string>();
  age = model<number>();
}
