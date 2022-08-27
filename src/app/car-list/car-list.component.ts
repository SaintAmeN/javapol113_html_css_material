import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarModel, CarModelFactory } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() carList: CarModel[] = [];

  displayedColumns: string[] = [
    'model-x',
    'make',
    'enginePower',
    'productionYear',
    'dateOfFirstRegistration'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
