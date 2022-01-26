import PageCountModel from "../models/PageCountModel";

export enum PaginationEnum {
  FIRST = 'First',
  NEXT = 'Next',
  PREVIOUS = 'Prev',
  LAST = 'Last'
};

class PageAction {
  type!: PaginationEnum;
  lastPage?: number = 0;
};

const pageCountReducer = (state: PageCountModel, action: PageAction) => {
  let newState: PageCountModel;

  switch (action.type) {
    case PaginationEnum.FIRST:
      newState = { count: 1 };
      break;
    case PaginationEnum.NEXT:
      newState = { count: state.count + 1 };
      break;
    case PaginationEnum.PREVIOUS:
      newState = { count: state.count - 1 };
      break;
    case PaginationEnum.LAST:
      newState = { count: action.lastPage ?? 0 };
      break;
    default:
      throw new Error('Invalid action type');
  }

  return newState;
};

export default pageCountReducer;