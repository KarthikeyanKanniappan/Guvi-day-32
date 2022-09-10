import React from "react";
import "../index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark ">
        <div className=" main">
          <Link className="navbar-brand" to="/">
            Library System
          </Link>
          <button
            onClick={() => {
              setSidebar(false);
            }}
            className="btn btn-dark"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// fixed-top
