import React from "react";

const Pagination = ({ nextPreviousPage, setPage }) => {
  const nextPage = (page) => {
    let pageCount = (page += 1);
    console.log(pageCount, "page is here");
    setPage(pageCount);
  };
  const previousPage = (page) => {
    let previousPageCount = (page -= 1);
    setPage(previousPageCount);
  };
  return (
    <div className="d-flex p-4 justify-content-between">
      <button
        className="pagination-btn"
        onClick={() => previousPage(nextPreviousPage.page)}
      >{`⬅️ ${nextPreviousPage.page - 1}  page`}</button>
      <button
        className="pagination-btn"
        onClick={() => nextPage(nextPreviousPage.page)}
      >{`${nextPreviousPage.page + 1}  page ➡️`}</button>
    </div>
  );
};

export default Pagination;
