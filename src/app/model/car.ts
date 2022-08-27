// public class CarModel {
//    private String model;
//    private String make;
//    private double enginePower;
//    private int productionYear;
//    private LocalDate dateOfFirstRegistration;
// }

import { Injectable } from "@angular/core";

// DTO => Data Transfer Object
export type CarModel = {
  model: string;
  make: string;
  enginePower: number;
  productionYear: number;
  dateOfFirstRegistration: string;
}

// Factory method & factory
@Injectable()
export class CarModelFactory {
  CreateDefaultCarModel(): CarModel {
    return {
      dateOfFirstRegistration: '2000-01-01',
      enginePower: 1.0,
      make: '',
      model: '',
      productionYear: 2000
    }
  }

  CreateCarModel(model: string, make: string): CarModel {
    return {
      dateOfFirstRegistration: '2000-01-01',
      enginePower: 1.0,
      make: make,
      model: model,
      productionYear: 2000
    }
  }
}
