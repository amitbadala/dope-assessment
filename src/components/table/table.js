import React, { useState } from "react";
import Spinner from "../spinner/spinner";
import "./table.less";

const DataTable = ({ columns, data = [], isLoading, ...rest }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc"); // 'asc' for ascending, 'desc' for descending

  const sortedData = [...data].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortColumn] > b[sortColumn]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      // Toggle sort direction
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const TableRow = ({ row }) => {
    return (
      <tr>
        {Object.keys(columns).map((header) =>
          columns[header]?.render ? (
            <td key={header}>{columns[header].render(row[header])}</td>
          ) : (
            <td key={header}>{row[header]}</td>
          )
        )}
      </tr>
    );
  };

  return (
    <table {...rest}>
      <thead>
        <tr>
          {Object.keys(columns).map((key) => (
            <th key={key} onClick={() => handleSort(key)}>
              {columns[key].title}
              {sortColumn === key && (sortDirection === "asc" ? " ↑" : " ↓")}
            </th>
          ))}
        </tr>
      </thead>
      {isLoading ? (
        <tbody className="empty-tbody">
          <tr>
            <td
              style={{ paddingTop: 20 }}
              colSpan={Object.keys(columns).length}
            >
              <Spinner style={{ margin: "0px auto" }}></Spinner>
            </td>
          </tr>
        </tbody>
      ) : sortedData.length ? (
        <tbody>
          {sortedData.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      ) : (
        <tbody style={{ textAlign: "center" }} className="empty-tbody">
          No Data present
        </tbody>
      )}
    </table>
  );
};

export default DataTable;
