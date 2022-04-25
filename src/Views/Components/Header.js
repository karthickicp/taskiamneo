import React from "react";

export const Header = (props) => {
  return (
    <div>
      <header>
        <div className="left">
          <h1>iamneo.ai Talent Center</h1>
        </div>
        <div className="right">
          <div className="search-field">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => props.func(e.target.value)}
            />
          </div>
          <button>+ Add New</button>
          <i className="fa-solid fa-gift"></i>
          <div className="profile">
            <span>K</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="left">
          <h4>
            <i className="fa-solid fa-briefcase"></i> Jobs{" "}
            <i className="fa-solid fa-chevron-right"></i> Full-stack Engineer
          </h4>
          <button>View Job Details</button>
        </div>
        <div className="right">
          <div>
            <span>Add Candidate</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div>
            <i className="fa-solid fa-globe"></i>
            <span>Published</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
