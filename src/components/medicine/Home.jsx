import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Medicine from "./Medicine";

const Home = () => {
  const medicines = useSelector((state) => state.medicines);
  console.log(medicines);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              {/* <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div> */}
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <Medicine medicine={medicine} key={medicine.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
