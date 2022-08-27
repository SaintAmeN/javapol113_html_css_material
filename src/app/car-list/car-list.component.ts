import { Component, OnInit } from '@angular/core';
import { CarModel } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: CarModel[];
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
