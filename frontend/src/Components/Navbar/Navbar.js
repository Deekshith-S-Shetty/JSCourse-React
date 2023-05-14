import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  const [points,setPoints] = useState(0);
  const newPoints = 0;

  const handlePoints = ()=>{
    setPoints(points+newPoints);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">JScourse</span>
          </div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/leaderboard" className="nav-link">
                LeaderBoard
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login/Register
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Points
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <p className="dropdown-item">{points}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
