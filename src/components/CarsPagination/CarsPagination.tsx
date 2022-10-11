import React from 'react';
import { Pagination } from 'react-bootstrap';
import { PaginationEnum } from '../../reducer/pageCountReducer';

type CarsPaginationProps = {
  totalPageCount: number,
  page: {count: number},
  dispatch: any
};

const { First, Last, Prev, Next, Item } = Pagination;

const CarsPagination = ({ totalPageCount, page, dispatch }: CarsPaginationProps) => {
  return (
    <Pagination className='justify-content-center'>
      <First onClick={() => dispatch({ type: PaginationEnum.FIRST })}>First</First>
      <Prev disabled={page.count === 1} onClick={() => { dispatch({ type: PaginationEnum.PREVIOUS }) }}>Previous</Prev>
      <Item className='page-info' data-testid='carsPageCount'>Page {page.count} of {totalPageCount}</Item>
      <Next disabled={page.count === totalPageCount} onClick={() => { dispatch({ type: PaginationEnum.NEXT }) }}>Next</Next>
      <Last onClick={() => { dispatch({ type: PaginationEnum.LAST, lastPage: totalPageCount }) }}>Last</Last>
    </Pagination>
  );
};

export default CarsPagination;