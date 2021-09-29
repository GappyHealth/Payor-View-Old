import React, { Component } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./common/globalFilter";

const ReactTable = (props) => {
  const { columns, data, isLoading } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="table mt-2 table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="font-weight-light" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-sort-desc" />
                      ) : (
                        <i className="fa fa-sort-asc" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className="m-5">
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span className="m-2">
        Go to page:{"   "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          style={{ width: "50px" }}
        ></input>
      </span>
      {/* <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {
          [10, 15, 25].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))
        }
      </select> */}
      <button
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        className="btn btn-primary m-2"
      >
        {"<<"}
      </button>
      <button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className="btn btn-primary m-2"
      >
        Previous
      </button>
      <button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className="btn btn-primary m-2"
      >
        Next
      </button>
      <button
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        className="btn btn-primary m-2"
      >
        {">>"}
      </button>
      {isLoading ? (
        <div class="center m-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReactTable;
