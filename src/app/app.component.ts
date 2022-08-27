import { Component } from '@angular/core';
import { CarModel } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carList: CarModel[];

  constructor(){
    this.carList = []
  }

  addCarToList(car: CarModel): void {
    console.log('add car to list invoked in app component')
    let newCarList = [...this.carList]
    newCarList.push(car)
    this.carList = newCarList
  }
}
