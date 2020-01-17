import React, { Component, Fragment } from "react";
import { Link } from "react-router";
class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="cd-main-header">
          <Link to="#0" className="cd-logo">
            <img src="/assets/img/logo-uci.png" id="log-uci" alt="Logo" />
          </Link>
          <Link to="#0" className="cd-logo">
            <img
              src="/assets/img/ElectronicCats.png"
              id="log-elec"
              alt="Logo"
            />
          </Link>
          <Link to="#0" className="cd-nav-trigger">
            Menu<span />
          </Link>
          <nav className="cd-nav">
            <ul className="cd-top-nav">
              <li className="has-children account">
                <Link to="#0" id="RSSI-data" />
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}
export default Header;
