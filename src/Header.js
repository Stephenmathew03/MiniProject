import React from "react";

const Header = () => {
  const headerStyle = {
    fontFamily: "serif", // Specify the serif font you want to use
  };

  const linkStyle = {
    color: "white",
  };

  return (
    <div className="container">
      <header
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
        style={headerStyle}
      >
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
            style={linkStyle}
          >
            <h1>
              <b>MoneyBuddy</b>
            </h1>
          </a>
        </div>
        <ul
          className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
          style={headerStyle}
        >
          <li>
            <a href="./App.js" className="nav-link px-2" style={linkStyle}>
              <b>Home</b>
            </a>
          </li>
          <li>
            <a href="/signup.js" className="nav-link px-2" style={linkStyle}>
              <b>Features</b>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2" style={linkStyle}>
              <b>Pricing</b>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2" style={linkStyle}>
              <b>FAQs</b>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2" style={linkStyle}>
              <b>About</b>
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
