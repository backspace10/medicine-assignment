import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand text-light">
          Medicine
        </Link>
        <div>
          <Link to="/medicines/add" className="btn btn-light ml-auto">
            Create Medicine
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
