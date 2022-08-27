import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../car-service/car.service';
import { CarModel } from '../model/car';


const DEFAULT_CAR_VALUES = {
  model: '',
  make: '',
  enginePower: 0.0,
  productionYear: 2000,
  dateOfFirstRegistration: '2000-01-02'
}

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: CarModel;

  constructor(private carService : CarService) {
    this.carForm = Object.assign({}, DEFAULT_CAR_VALUES)
  }

  assignDefaultFormValues() : void {
    this.carForm = Object.assign({}, DEFAULT_CAR_VALUES)
  }

  ngOnInit(): void {
  }

  clickSubmit(): void {
    console.log(JSON.stringify(this.carForm.dateOfFirstRegistration))
    console.log(this.carForm.dateOfFirstRegistration)
    console.log('Submit: ')
    console.log(this.carForm)
    this.carService.addCarToList(this.carForm)

    // wyczyszczenie formularza poprzez
    // podstawienie tam nowego obiektu
    this.assignDefaultFormValues()
  }

  clickClear(): void {
    this.assignDefaultFormValues()
  }
}

// Class        - złożony komponent który posiada zachowanie (aka metody)
// Struct(type) - prosty typ który posiada wyłącznie pola
// Interface    - typ nadrzędny który pozwala dalej rozszerzać aplikację
