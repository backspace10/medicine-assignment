import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import shortid from "shortid";
import { addMedicine } from "../../actions/medicineAction";

const AddMedicine = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");

  //handle submit
  const craeteMedicine = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      type: type,
      quantity: quantity,
    };
    dispatch(addMedicine(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteMedicine(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Medicine Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Medicine Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Medicine Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
