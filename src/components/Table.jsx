import React, { useState, useEffect } from "react";

import axios from "../Api";
const Table = () => {
  const [el, setEl] = useState([]);
  useEffect(() => {
    getElement();
  }, []);
  let getElement = async () => {
    try {
      let response = await axios.get("/library");
      setEl(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>ISBN No.</th>
          <th>Category</th>
          <th>Author</th>
          <th>Location Rack</th>
          <th>No. of Copy</th>
          <th>Created On</th>
          <th>Updated On</th>
          <th>Action</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Book Name</th>
          <th>ISBN No.</th>
          <th>Category</th>
          <th>Author</th>
          <th>Location Rack</th>
          <th>No. of Copy</th>
          <th>Created On</th>
          <th>Updated On</th>
          <th>Action</th>
        </tr>
      </tfoot>
      <tbody>
        {el.map((el, id) => {
          return (
            <tr key={el.id}>
              <td>{el.book}</td>
              <td>{el.i}</td>
              <td>{el.category}</td>
              <td>{el.author}</td>
              <td>{el.locationRack}</td>
              <td>{el.copy}</td>
              <td>{el.created}</td>
              <td>{el.action}</td>
              <td>
                <a href="" class="btn btn-sm btn-primary">
                  Edit
                </a>
                <button
                  type="button"
                  name="delete_button"
                  class="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
