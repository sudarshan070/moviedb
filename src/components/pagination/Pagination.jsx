import React from "react";

const Pagination = ({ nextPreviousPage, setPage, page }) => {
  console.log(page, "page is here");
  const nextPage = (page) => {
    let pageCount = (page += 1);
    console.log(pageCount, "page is here");
    setPage(pageCount);
  };
  const previousPage = (page) => {
    console.log(page, "page is here");
    let previousPageCount = (page -= 1);
    setPage(previousPageCount);
  };
  return (
    <div className=" p-4">
      {page === 1 ? (
        ""
      ) : (
        <button
          className="pagination-btn"
          onClick={() => previousPage(nextPreviousPage.page)}
        >{`⬅️ ${nextPreviousPage.page - 1}  page`}</button>
      )}

      <button
        className="pagination-btn float-right"
        onClick={() => nextPage(nextPreviousPage.page)}
      >{`${nextPreviousPage.page + 1}  page ➡️`}</button>
    </div>
  );
};

export default Pagination;
