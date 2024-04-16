import { Component, effect, inject, signal } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  dataService = inject(DataService);
  cars = this.dataService.cars;
  isEditMode = signal<boolean>(false);
  editIndex: number = -1;

  getCars() {
    this.dataService.getCars();
  }

  delete(index:  number) {
    this.dataService.deleteCar(index);
  }

  editCar(index: number) {
    this.editIndex = index;
    this.isEditMode.set(true);
  }

  constructor() {
  }

}
