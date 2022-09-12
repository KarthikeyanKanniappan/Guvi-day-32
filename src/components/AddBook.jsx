import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const AddBook = () => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <PersonAddAltIcon /> Add New Book
      </div>
      <div className="card-body">
        <form method="post">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Book Name</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Select Author</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Select Category</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Select Location Rack</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Book ISBN Number</label>
                <input
                  type="text"
                  name="book_isbn_number"
                  id="book_isbn_number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">No. of Copy</label>
                <input
                  type="number"
                  name="book_no_of_copy"
                  id="book_no_of_copy"
                  step="1"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 mb-3 text-center">
            <input
              type="submit"
              name="add_book"
              className="btn btn-success"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
