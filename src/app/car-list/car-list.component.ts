import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarModel, CarModelFactory } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() carList: CarModel[] = [];
  @Output() onCarDeleted: EventEmitter<CarModel> = new EventEmitter()

  displayedColumns: string[] = [
    'model-x',
    'make',
    'enginePower',
    'productionYear',
    'dateOfFirstRegistration',
    'del-button-column'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteFromList(carToDelete : CarModel): void {
    this.onCarDeleted.emit(carToDelete)
  }
}
