export default class CarQueryParamsModel {
  manufacturer!: string;
  color!: string;
  sort!: 'asc' | 'des';
  page!: number;
}