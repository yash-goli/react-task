import { atom } from "recoil";
import CarFilterModel from "../models/CarFilterModel";

export const carFilterAtom = atom<CarFilterModel>({
  key: 'carFilterAtom',
  default: {
    color: '',
    manufacturer: ''
  }
});