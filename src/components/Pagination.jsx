/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Pagination.js (Your custom Pagination component)
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate an array with page numbers from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex justify-center items-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              onClick={handlePreviousClick}
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                onClick={() => onPageChange(pageNumber - 1)}
                className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  pageNumber === currentPage + 1
                    ? "bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : ""
                }`}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={handleNextClick}
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
