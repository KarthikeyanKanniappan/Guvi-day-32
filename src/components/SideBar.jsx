import React from "react";
import { SidebarData } from "./SidebarData";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = ({ setSidebar }) => {
  return (
    <div className={`sidebar`}>
      <ul className="sidebarList">
        {SidebarData.map((el, key) => {
          return (
            <li
              key={key}
              className="rowe"
              onClick={() => {
                window.location.pathname = el.link;
              }}
            >
              <div id="icon">{el.icon}</div>
              <div id="title">{el.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            setSidebar(true);
          }}
          className="btn btn-dark"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
