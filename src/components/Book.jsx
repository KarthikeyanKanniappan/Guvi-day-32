import React from "react";
import TableViewIcon from "@mui/icons-material/TableView";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div>
      <h1>Book Management</h1>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col col-md-6">
              <TableViewIcon /> Book Management
            </div>
            <div className="col col-md-6" align="right">
              <Link to="AddBook" className="btn btn-success btn-sm">
                Add
              </Link>
            </div>
          </div>
        </div>
        <div class="card-body">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Book;
