import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const IssuedBookManagement = () => {
  return (
    <div>
      <h1>Issued Book Management</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              <PersonAddIcon /> Issue New Book
            </div>
            <div class="card-body">
              <form method="post">
                <div class="mb-3">
                  <label class="form-label">Book ISBN Number</label>
                  <input
                    type="text"
                    name="book_id"
                    id="book_id"
                    class="form-control"
                  />
                  <span id="book_isbn_result"></span>
                </div>
                <div class="mb-3">
                  <label class="form-label">User Unique ID</label>
                  <input
                    type="text"
                    name="user_id"
                    id="user_id"
                    class="form-control"
                  />
                  <span id="user_unique_id_result"></span>
                </div>
                <div class="mt-4 mb-0">
                  <input
                    type="submit"
                    name="issue_book_button"
                    class="btn btn-success"
                    value="Issue"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuedBookManagement;
