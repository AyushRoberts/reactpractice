import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, page, setPage }) => {
  let next = () => {
    setPage((p) => p + 1);
  };
  let prev = () => {
    if (page === 1) return;
    setPage((p) => p - 1);
  };
  return (
    <>
      <ReactPaginate
        forcePage={page === 1 ? 0 : page - 1}
        pageCount={info?.pages}
        nextLabel="Next"
        previousLabel="P"
        previousClassName="btn btn-primary"
        nextClassName="btn btn-primary"
        pageLinkClassName="page-link"
        pageClassName="page-item"
        activeClassName="active"
        onPageChange={(data) => {
          setPage(data.selected + 1);
        }}
        className="pagination justify-content-center"
      />
      {/* <div className="container d-flex justify-content-center gap-5 my-5">
        <button onClick={prev} className="btn btn-primary">
          Prev
        </button>
        <button onClick={next} className="btn btn-primary">
          Next
        </button>
      </div> */}
    </>
  );
};

export default Pagination;
