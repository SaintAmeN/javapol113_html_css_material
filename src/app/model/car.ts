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
