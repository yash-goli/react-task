import { atom } from "recoil";
import PageCountModel from "../models/PageCountModel";

export const paginationAtom = atom<PageCountModel>({
  key: 'paginationAtom',
  default: { count: 1 }
});