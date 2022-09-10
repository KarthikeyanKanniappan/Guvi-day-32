import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const AddBook = () => {
  return (
    <div class="card mb-4">
      <div class="card-header">
        <PersonAddAltIcon /> Add New Book
      </div>
      <div class="card-body">
        <form method="post">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Book Name</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Select Author</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Select Category</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Select Location Rack</label>
                <input
                  type="text"
                  name="book_name"
                  id="book_name"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Book ISBN Number</label>
                <input
                  type="text"
                  name="book_isbn_number"
                  id="book_isbn_number"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">No. of Copy</label>
                <input
                  type="number"
                  name="book_no_of_copy"
                  id="book_no_of_copy"
                  step="1"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 mb-3 text-center">
            <input
              type="submit"
              name="add_book"
              class="btn btn-success"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
