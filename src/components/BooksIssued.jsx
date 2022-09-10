import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Link } from "react-router-dom";
const BooksIssued = () => {
  return (
    <div>
      <h1>Issued Book Management</h1>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col col-md-6">
              <ManageSearchIcon /> Issue Book Management
            </div>
            <div className="col col-md-6" align="right">
              <Link
                to="/IssuedBookManagement"
                className="btn btn-success btn-sm"
              >
                Add
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Book ISBN Number</th>
                <th>User Unique ID</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Late Return Fines</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Book ISBN Number</th>
                <th>User Unique ID</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Late Return Fines</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link to="viewDetails" class="btn btn-info btn-sm">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksIssued;
