import React, { Component, Fragment } from "react";
class Header extends Component {
  render() {
    return (
      <header className="cd-main-header">
        <a href="#0" className="cd-logo">
          <img src="./assets/img/logo-uci.png" id="log-uci" alt="Logo" />
        </a>
        <a href="#0" className="cd-logo">
          <img src="./assets/img/ElectronicCats.png" id="log-elec" alt="Logo" />
        </a>
        <a href="#0" className="cd-nav-trigger">
          Menu
          <span />
        </a>
        <nav className="cd-nav">
          <ul className="cd-top-nav">
            <li className="has-children account">
              <a href="#0" id="RSSI-data" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
