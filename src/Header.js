import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          GithubRepo's
        </a>
        <div class="navbar" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
