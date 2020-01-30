import React, { Component, Fragment } from "react";

import SerialPortConnection from "./containers/SerialPortConnection";

import CountentWrapper from "./CountentWrapper"
class Countent extends Component {
  render() {
    return (
      <main className="cd-main-content">
        <nav className="cd-side-nav">
          <ul>
            <li className="cd-label">Main</li>
            <li className="has-children overview active">
              <a href="#0">GPS</a>
              <ul>
                <li>
                  <a href="#0">
                    Altura <span className="count" id="altura" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Altura atm <span className="count" id="alturaAtm" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Velocidad <span className="count" id="velocidad" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children active">
              <a href="#0">Info</a>

              <ul>
                <li>
                  <a href="#0">
                    Temperatura <span className="count" id="temperatura" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Humedad <span className="count" id="humedad" />{" "}
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Presión <span className="count" id="presion" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    TVOC
                    <span className="count" id="tvoc" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    CO2 <span className="count" id="co2" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Giroscopio
                    <span className="count" id="giroscopio">
                      X-Y-Z
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Acelerometro
                    <span className="count" id="acelerometro">
                      X-Y-Z
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Magnetometro
                    <span className="count" id="magnetometro">
                      X-Y-Z
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li className="cd-label">Secondario</li>
            <li className="has-children bookmarks">
             <SerialPortConnection />
            </li>
            <li className="has-children images">
              <a href="#0">Galeria</a>
            </li>

            <li className="has-children users">
              <a href="#0">Creditos</a>

              <ul>
                <li>
                  <a href="#0">Programacion</a>
                </li>
              </ul>
            </li>
          </ul>

          <li className="cd-label">RSSI</li>
          <li className="action-btn">
            <a href="#0" id="RSSI-data">
              :
            </a>
          </li>
        </nav>
        <CountentWrapper />
      </main>
    );
  }
}
export default Countent;
