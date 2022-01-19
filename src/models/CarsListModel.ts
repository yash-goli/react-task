export default class CarsListModel {
  cars!: CarModel[];
  totalPageCount!: number;
  totalCarsCount!: number;
}

export class CarModel {
  stockNumber!: number;
  manufacturerName!: string;
  modelName!: string;
  color!: string;
  fuelType!: string;
  pictureUrl!: string;
  mileage!: MileageModel;
}

class MileageModel {
  number!: number;
  unit!: string;
}