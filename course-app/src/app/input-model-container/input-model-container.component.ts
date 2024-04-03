import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InputChildComponent } from './input-child/input-child.component';
import { ModelChildComponent } from './model-child/model-child.component';

@Component({
  selector: 'app-input-model-container',
  standalone: true,
  imports: [InputChildComponent, ModelChildComponent],
  templateUrl: './input-model-container.component.html',
  styleUrl: './input-model-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputModelContainerComponent {
  name = signal<string>('Andrea');
  surname = signal<string>('Trentini')
  age = signal<number>(55);
}
