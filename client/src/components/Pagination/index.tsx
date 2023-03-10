import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagiantion.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (e: number) => void;
};

const Pagiantion: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(e) => onChangePage(e.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);

export default Pagiantion;
