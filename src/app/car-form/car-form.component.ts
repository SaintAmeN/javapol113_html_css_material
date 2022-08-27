import { Component, OnInit } from '@angular/core';

// public class CarModel {
//    private String model;
//    private String make;
//    private double enginePower;
//    private int productionYear;
//    private LocalDate dateOfFirstRegistration;
// }
// DTO => Data Transfer Object
export type CarModel = {
  model: string;
  make: string;
  enginePower: number;
  productionYear: number;
  dateOfFirstRegistration: string;
}

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

  constructor() {
    this.carForm = Object.assign({}, DEFAULT_CAR_VALUES)
  }

  assignDefaultFormValues() : void {
    this.carForm = Object.assign({}, DEFAULT_CAR_VALUES)
  }

  ngOnInit(): void {
  }

  clickSubmit(): void {
    console.log('Submit: ')
    console.log(this.carForm)
  }

  clickClear(): void {
    this.assignDefaultFormValues()
  }
}

// Class        - złożony komponent który posiada zachowanie (aka metody)
// Struct(type) - prosty typ który posiada wyłącznie pola
// Interface    - typ nadrzędny który pozwala dalej rozszerzać aplikację
