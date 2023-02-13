import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  function getNavItems() {
    return props.items.map(item => {
      return (
        <a
          className={item.active ? "active nav-link" : "nav-link"}
          href={item.href}
        >
          {item.text}
        </a>
      );
    });
  }
  return (
    <nav className="navbar navbar-expand-lg bg-purple">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{getNavItems()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
