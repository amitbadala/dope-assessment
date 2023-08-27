import React from "react";
import Spinner from "../spinner/spinner";
import "./table.less";

const DataTable = ({ columns, data, isLoading, ...rest }) => {
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
            <th key={key}>{columns[key].title}</th>
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
      ) : data.length ? (
        <tbody>
          {data.map((row) => (
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
