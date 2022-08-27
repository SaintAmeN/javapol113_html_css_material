import { Component, Input, OnInit } from '@angular/core';
import { CarModel, CarModelFactory } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() carList: CarModel[];

  displayedColumns: string[] = [
    'model-x',
    'make',
    'enginePower',
    'productionYear',
    'dateOfFirstRegistration'
  ];

  constructor() {
    this.carList = []
  }

  ngOnInit(): void {
  }
}
