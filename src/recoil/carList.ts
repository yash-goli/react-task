import { selector } from "recoil";
import CarsListModel from "../models/CarsListModel";
import carsApi from '../services/carServiceApiHandler';
import { carFilterAtom } from "./carFilter";
import { paginationAtom } from "./pagination";

export const carListSelector = selector<CarsListModel>({
  key: 'carListSelector',
  get: async ({get}) => {
    const carFilters = get(carFilterAtom);
    const pageCount = get(paginationAtom);
    try {
      return await carsApi.getListOfCars({
        color: carFilters.color,
        manufacturer: carFilters.manufacturer,
        page: pageCount.count,
        sort: 'asc'
      });
    } catch (e) {
      throw e;
    }
  }
})