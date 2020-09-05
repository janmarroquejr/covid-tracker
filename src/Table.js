import React from "react";
import "./Table.css";

function Table({ countries }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>{numberWithCommas(cases)}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
