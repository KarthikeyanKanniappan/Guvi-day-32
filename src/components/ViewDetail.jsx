import React from "react";

const ViewDetail = () => {
  return (
    <div>
      <h1>Issue Book Management</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item active">View Issue Book Details</li>
      </ol>
      <h2>Book Details</h2>
      <hr style={{ width: "12%" }} />
      <table class="table ">
        <tr>
          <th width="30%">Book ISBN Number</th>
          <td width="70%">753951852123</td>
        </tr>
        <tr>
          <th width="30%">Book Title</th>
          <td width="70%">PHP and MySQL Web Development</td>
        </tr>
        <tr>
          <th width="30%">Author</th>
          <td width="70%">Laura Thompson</td>
        </tr>
      </table>
      <br />
      <h2>User Details</h2>
      <hr style={{ width: "12%" }} />
      <table class="table ">
        <tr>
          <th width="30%">User Unique ID</th>
          <td width="70%">U94560562</td>
        </tr>
        <tr>
          <th width="30%">User Name</th>
          <td width="70%">sourav</td>
        </tr>
        <tr>
          <th width="30%">User Address</th>
          <td width="70%">rrr</td>
        </tr>
        <tr>
          <th width="30%">User Contact No.</th>
          <td width="70%">07063285821</td>
        </tr>
        <tr>
          <th width="30%">User Email Address</th>
          <td width="70%">souravmandal87@gmail.com</td>
        </tr>
        <tr>
          <th width="30%">User Image</th>
          <td width="70%">
            <img
              src="http://demo.webslesson.info/library-management-system/upload/1642180555-604846711.jpg"
              class="img-thumbnail"
              width="100"
            />
          </td>
        </tr>
      </table>
      <br />
      <h2>Issue Book Details</h2>
      <hr style={{ width: "21%" }} />
      <table class="table ">
        <tr>
          <th width="30%">Book Issue Date</th>
          <td width="70%">2022-09-08 17:08:06</td>
        </tr>
        <tr>
          <th width="30%">Book Return Date</th>
          <td width="70%">2022-09-09 11:36:38</td>
        </tr>
        <tr>
          <th width="30%">Book Issue Status</th>
          <td width="70%">
            <span class="badge bg-primary">Return</span>
          </td>
        </tr>
        <tr>
          <th width="30%">Total Fines</th>
          <td width="70%">
            <span style={{ fontFamily: "DejaVu Sans" }}>&#8377;</span>&nbsp; 0
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ViewDetail;
