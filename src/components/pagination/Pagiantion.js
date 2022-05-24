import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import PropTypes from 'prop-types';

export const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('pagination-container', { [className]: className })}>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}>
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li key={idx} className='pagination-item dots'>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={idx}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}>
        <div className='arrow right' />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string
};

// Call Pagination
{
  /* <Pagination
  className='pagination-bar'
  currentPage={currentPage}
  totalCount={100}
  pageSize={10}
  onPageChange={(page) => {
    setCurrentPage(page);
    fetchUsers({ page });
  }}
/> */
}
