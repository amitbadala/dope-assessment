import React from "react";
import "./table.less";

const DataTable = ({ columns, data, ...rest }) => {
  return (
    <table {...rest}>
      <thead>
        <tr>
          {Object.keys(columns).map((key) => (
            <th key={key}>{columns[key].title}</th>
          ))}
        </tr>
      </thead>
      {data.length ? (
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(columns).map((header) =>
                columns[header]?.render ? (
                  <td key={header}>{columns[header].render(row[header])}</td>
                ) : (
                  <td key={header}>{row[header]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody style={{ height: 100 }}></tbody>
      )}
    </table>
  );
};

export default DataTable;
