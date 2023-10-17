import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <ul>
        <Link className="link" to={"/"}>
          <li>Home</li></Link>
          <li>Counter</li>
          <li>About</li>
          <li>Contact Us</li>
            <Link className="link" to={"/calculator"}>
          <li>Calculator</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
