import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQHKJ7bgUY5kjA/company-logo_200_200/0/1615143047817?e=2147483647&v=beta&t=QvGVaP8GxB8aHUb9Y887DfWNwXOQZZVjCaQAALUjo2c"
          width="54px"
          height="54px"
          alt="logo"
        />
      </div>
      <div className="title">
        <h1>YOUR SPOTTABL TEAM</h1>
        <p>spottabl support you all throughout</p>
      </div>
    </div>
  );
};

export default Header;
