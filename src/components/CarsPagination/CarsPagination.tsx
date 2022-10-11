import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { paginationAtom } from '../../recoil/pagination';
import { PaginationEnum } from '../../reducer/pageCountReducer';

type CarsPaginationProps = {
  totalPageCount: number
};

const { First, Last, Prev, Next, Item } = Pagination;

const CarsPagination = ({ totalPageCount }: CarsPaginationProps) => {

  const [pageCount, setPageCount] = useRecoilState(paginationAtom);

  const pageCounter = (action: PaginationEnum, lastPage?: number) => {
    switch (action) {
      case PaginationEnum.FIRST:
        setPageCount({ count: 1 });
        break;
      case PaginationEnum.NEXT:
        setPageCount({ count: pageCount.count + 1 });
        break;
      case PaginationEnum.PREVIOUS:
        setPageCount({ count: pageCount.count - 1 });
        break;
      case PaginationEnum.LAST:
        setPageCount({ count: lastPage ?? 0 });
        break;
      default:
        throw new Error('Invalid action type');
    }
  };

  return (
    <Pagination className='justify-content-center'>
      <First onClick={() => pageCounter(PaginationEnum.FIRST)}>First</First>
      <Prev disabled={pageCount.count === 1} onClick={() => { pageCounter(PaginationEnum.PREVIOUS) }}>Previous</Prev>
      <Item className='page-info' data-testid='carsPageCount'>Page {pageCount.count} of {totalPageCount}</Item>
      <Next disabled={pageCount.count === totalPageCount} onClick={() => { pageCounter(PaginationEnum.NEXT) }}>Next</Next>
      <Last onClick={() => { pageCounter(PaginationEnum.LAST, totalPageCount) }}>Last</Last>
    </Pagination>
  );
};

export default CarsPagination;