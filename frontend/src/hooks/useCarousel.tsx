"use client"
import { useState } from 'react';

export const useCarousel = ({totalItems, itemsPerPage}:{totalItems:number, itemsPerPage:number}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : prevPage));
  };

  const prev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const goToPage = (pageIndex:number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  return {
    currentPage,
    totalPages,
    next,
    prev,
    goToPage,
  };
};