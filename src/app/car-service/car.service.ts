import { Injectable } from "@angular/core";
import { CarModel } from "../model/car";

@Injectable()
export class CarService {
  carList: CarModel[] = [];

  constructor() {
  }

  // [ 5, 10, 15, 20, 25]
  // idx = 2

  // Przykłady:
  // -> splice(2, 1)
  //     -> [ 5, 10, 20, 25]
  // -> splice(2, 2)
  //     -> [ 5, 10, 25]
  deleteCarFromList(car: CarModel) : void {
    console.log('delete car from list invoked in service')
    let newCarList = [...this.carList]                // kopia
    let carToDeleteIndex = newCarList.indexOf(car)    // szukamy indeksu elementu usuwanego
    newCarList.splice(carToDeleteIndex, 1)            // wycinamy na danej pozycji jeden element z listy
    this.carList = newCarList                         // podmieniamy orginalną liste nową kopią
  }

  addCarToList(car: CarModel): void {
    console.log('add car to list invoked in service')
    let newCarList = [...this.carList]
    newCarList.push(car)
    this.carList = newCarList
  }
}
