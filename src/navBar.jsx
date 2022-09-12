import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" >Pocetna</Link>
      <Link to="/prijava" style={{marginLeft: 30 }}>Prijava</Link>
      <Link to="/provera" style={{marginLeft: 30 }}>Provera</Link>
        
    </div>
  );
}

export default NavBar;
