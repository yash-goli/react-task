export default class CarManufacturersModel {
  manufacturers!: CarManufacturerModel[];
}

class CarManufacturerModel {
  name!:  string;
  models!: string[];
}