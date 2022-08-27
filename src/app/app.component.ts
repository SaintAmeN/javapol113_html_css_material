import { Component } from '@angular/core';
import { CarModel } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carList: CarModel[] = [];

  constructor(){
  }

  addCarToList(car: CarModel): void {
    console.log('add car to list invoked in app component')
    let newCarList = [...this.carList]
    newCarList.push(car)
    this.carList = newCarList
  }

  // [ 5, 10, 15, 20, 25]
  // idx = 2

  // Przykłady:
  // -> splice(2, 1)
  //     -> [ 5, 10, 20, 25]
  // -> splice(2, 2)
  //     -> [ 5, 10, 25]
  deleteCarFromList(car: CarModel): void{
    console.log('delete car from list invoked in app component')
    let newCarList = [...this.carList]                // kopia
    let carToDeleteIndex = newCarList.indexOf(car)    // szukamy indeksu elementu usuwanego
    newCarList.splice(carToDeleteIndex, 1)            // wycinamy na danej pozycji jeden element z listy
    this.carList = newCarList                         // podmieniamy orginalną liste nową kopią
  }
}
