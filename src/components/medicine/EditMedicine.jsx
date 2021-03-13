import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getMedicine, updateMedicine } from "../../actions/medicineAction";

const EditMedicine = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const medicine = useSelector((state) => state.medicine);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (medicine !== null) {
      setName(medicine.name);
      setType(medicine.type);
      setQuantity(medicine.quantity);
    }
    dispatch(getMedicine(id));
  }, [medicine, id, dispatch]);

  const onUpdateMedicine = (e) => {
    e.preventDefault();

    const update_medicine = Object.assign(medicine, {
      name: name,
      type: type,
      quantity: quantity,
    });

    dispatch(updateMedicine(update_medicine));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Update a Medicine</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateMedicine(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMedicine;
