import React from "react";

export const NavBar = () => {
  return (
    <div className="nav-menu">
      <span>
        <i className="fa-brands fa-hashnode homeIcon"></i>
      </span>
      <div className="sidemenu">
        <ul>
          <li>
            <i className="fa-solid fa-gauge-high"></i>
          </li>
          <li>
            <i className="fa-solid fa-file-lines"></i>
          </li>
          <li>
            <i className="fa-solid fa-briefcase active"></i>
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
          </li>
          <li>
            <i className="fa-solid fa-user-group"></i>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-solid fa-circle-question"></i>
          </li>
          <li>
            <i className="fa-solid fa-comment-dots"></i>
          </li>
          <li>
            <i className="fa-solid fa-grip"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
