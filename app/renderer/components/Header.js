import React, { Component, Fragment } from "react";

/*
  Sub-Components
*/

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="cd-main-header">
          <a href="#0" className="cd-logo">
            <img
              src="./assets/img/ElectronicCats.png"
              id="log-elec"
              alt="Logo"
            />
          </a>
          <a href="#0" className="cd-nav-trigger">
            MENU
            <span />
          </a>
          <nav className="cd-nav">
            <ul className="cd-top-nav">
              <li className="has-children account">
                <a href="#0" id="RSSI-data" />
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
  }
}
export default Header;
