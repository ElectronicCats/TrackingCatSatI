import React, { Component, Fragment } from "react";

class Countent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="title-card-column">
          <p className="p-title-grph">Humedad</p>
        </div>
        <div id="chartHum" />
        
        <div className="title-card-column">
          <p className="p-title-grph">Temperatura</p>
        </div>
        <div id="chartTemperature" />

        <div className="title-card-column">
          <p className="p-title-grph">Giroscopio</p>
        </div>
        <div id="chartGiroscopio" />

        <div className="title-card-column">
          <p className="p-title-grph">Acelerometro</p>
        </div>
        <div id="chartAcelerometro" />

        <div className="title-card-column">
          <p className="p-title-grph">Magnetometro</p>
        </div>
        <div id="chartMagneto" />

        <div className="title-card-column">
          <p className="p-title-grph">CO2 y TVOC</p>
        </div>
        <div id="chartCO2&TVOC" />
      </div>
    );
  }
}
export default Countent;
