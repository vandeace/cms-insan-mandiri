import React from "react";
import "./SkeletonTable.css";

const SkeletonTable = () => {
  const rows = Array.from({ length: 5 }); // Adjust the number of rows as needed
  const columns = Array.from({ length: 1 }); // Adjust the number of columns as needed

  return (
    <div className="skeleton-table">
      {rows.map((_, rowIndex) => (
        <div className="skeleton-row" key={rowIndex}>
          {columns.map((_, colIndex) => (
            <div className="skeleton-cell skeleton" key={colIndex}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonTable;
