import Select from "react-dropdown-select";
import React, { useState, useEffect } from "react";

function Dropbar() {
  const [options, setOptions] = useState([
    { id: 1, movies: "superman" },
    { id: 2, movies: "antman" },
    { id: 3, movies: "spiderman" },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <>
      <div style={{ width: "250px", margin: "15px" }}>
        <Select
          options={options.map((item, index) => {
            return { value: item.id, label: item.movies };
          })}
          values={selectedOptions}
          onChange={(values) => setSelectedOptions([...values])}
        />
      </div>
    </>
  );
}

export default Dropbar;
