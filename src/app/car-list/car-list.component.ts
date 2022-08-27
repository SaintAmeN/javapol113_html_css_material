import { Component, OnInit } from '@angular/core';
import { CarService } from '../car-service/car.service';
import { CarModel } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  displayedColumns: string[] = [
    'model-x',
    'make',
    'enginePower',
    'productionYear',
    'dateOfFirstRegistration',
    'del-button-column'
  ];

  constructor(public carService : CarService) {
  }

  ngOnInit(): void {
  }

  deleteFromList(carToDelete : CarModel): void {
    this.carService.deleteCarFromList(carToDelete)
  }
}
