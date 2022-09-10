import React from "react";

const Dashboard = () => {
  let data = [
    {
      count: "10",
      title: "Total book Issued",
      color: "primary",
    },
    {
      count: "10",
      title: "Total book Returned",
      color: "warning",
    },
    {
      count: "0",
      title: "Total book Not Returned",
      color: "danger",
    },
    {
      count: "₹ 0",
      title: "Total Fines Received",
      color: "success",
    },
  ];
  return (
    <div>
      <h1 class="mb-5">Dashboard</h1>
      <div class="row">
        {data.map((el) => {
          return (
            <div class="col-xl-3 col-md-6">
              <div class={`card bg-${el.color} text-white mb-4`}>
                <div class="card-body">
                  <h1 class="text-center">{el.count}</h1>
                  <h5 class="text-center">{el.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
