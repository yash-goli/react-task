import { selectorFamily } from "recoil";
import CarDetailsModel from "../models/CarDetailsModel";
import carsApi from '../services/carServiceApiHandler';

export const carDetailsSelector = selectorFamily<CarDetailsModel | undefined, string | undefined>({
  key: 'carDetailsSelector',
  get: (stockNumber: string | undefined) => async ({get}) => {
    try {
      return await carsApi.getCarDetails(stockNumber || '')
    } catch (e) {
      throw e;
    }
  }
})