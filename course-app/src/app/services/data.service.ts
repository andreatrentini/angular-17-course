import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ICar } from './car.interface';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private carsSignal = signal<ICar[]>([]);
  cars = this.carsSignal.asReadonly();

  constructor(private http: HttpClient) { }

  getCars() {
    this.http.get<ICar[]>('/assets/cars.json').subscribe((data: ICar[]) => {
      this.carsSignal.set(data);
    })
  }

  deleteCar(index: number) {
    this.carsSignal.update(items => {
      items.splice(index, 1);
      return items;
    })
  }


}
