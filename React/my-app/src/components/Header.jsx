import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "salmon",
        }}
      >
        <div style={{ background: "darkturquoise", border: "1px black solid" }}>
          <Link to={"/"}>Home</Link>
        </div>
        <div style={{ backgroundColor: "olive" }}>
          <Link to={"/about"}>About</Link>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <Link to={"/news"}>News</Link>
        </div>
        <div style={{ backgroundColor: "teal" }}>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div style={{ backgroundColor: "tan" }}>
          <Link to={"/login"}>LogIn</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
