import React, { useState } from "react";
import { Link } from "react-router-dom";

const Medicine = ({ medicine }) => {
  const { id, name, type, quantity } = medicine;
  const [isSelected, setIsSelected] = useState(true);
  //   const handleCheckbox = () => {
  //     setIsSelected(!isSelected);
  //   };
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            // checked={selectAll}
            type="checkbox"
            className="custom-control-input"
            value={isSelected}
            onChange={(e) => setIsSelected(e.target.value)}
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      {/* <td>{id}</td> */}
      <td>{name}</td>
      <td>{type}</td>
      <td>{quantity}</td>
      <td className="actions">
        <Link to={`/medicines/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
      </td>
    </tr>
  );
};

export default Medicine;
