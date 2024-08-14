"use client";
import React from 'react';
import styles from './Pagination.module.css';
import classNames from 'classnames';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <a
          onClick={handlePrev}
          className={classNames({ [styles.disabled]: currentPage === 1 })}
        >
          Prev
        </a>
      </li>
      {pages.map(page => (
        <li key={page}>
          <a
            onClick={() => onPageChange(page)}
            className={classNames({ [styles.active]: page === currentPage })}
          >
            {page}
          </a>
        </li>
      ))}
      <li>
        <a
          onClick={handleNext}
          className={classNames({ [styles.disabled]: currentPage === totalPages })}
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
