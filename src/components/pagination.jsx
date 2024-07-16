import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ items, itemsPerPage, renderItems }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          disabled={i === currentPage}
          className="paginationButton"
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div>{renderItems(selectedItems)}</div>
      <div>
        <button className="paginationButton2" onClick={handlePrevPage} disabled={currentPage === 1}>
          <ChevronLeft></ChevronLeft>
        </button>
        {renderPageNumbers()}
        <button className="paginationButton2" onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ChevronRight></ChevronRight>
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  renderItems: PropTypes.func.isRequired,
};

export default Pagination;
