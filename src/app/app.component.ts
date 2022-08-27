import { Component } from '@angular/core';
import { CarModel, CarModelFactory } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carList: CarModel[];

  constructor(private carFactory: CarModelFactory){
    this.carList = [
      this.carFactory.CreateDefaultCarModel(),
      this.carFactory.CreateCarModel('Some model', 'Some make'),
    ]
  }

  addCarToList(car: CarModel): void {
    console.log('add car to list invoked in app component')
    this.carList.push(car)
  }
}
