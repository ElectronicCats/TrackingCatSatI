import React, { Component, Fragment } from "react";

class Countent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-mapa">
          <div
            id="mapid"
            className="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
          >
            <div id="element_map-2" className="leaflet-pane leaflet-map-pane">
              <div className="leaflet-pane leaflet-tile-pane">
                <div className="leaflet-layer " id="element_map-3">
                  <div
                    className="leaflet-tile-container leaflet-zoom-animated"
                    id="element_map-4"
                  >
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-5"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-6"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-7"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-8"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-9"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-10"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-11"
                    />
                    <img
                      alt=""
                      role="presentation"
                      className="leaflet-tile leaflet-tile-loaded"
                      id="element_map-12"
                    />
                  </div>
                </div>
              </div>
              <div className="leaflet-pane leaflet-shadow-pane" />
              <div className="leaflet-pane leaflet-overlay-pane" />
              <div className="leaflet-pane leaflet-marker-pane" />
              <div className="leaflet-pane leaflet-tooltip-pane" />
              <div className="leaflet-pane leaflet-popup-pane" />
              <div
                className="leaflet-proxy leaflet-zoom-animated"
                id="element_map-13"
              />
            </div>
            <div className="leaflet-control-container">
              <div className="leaflet-top leaflet-left">
                <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                  <a
                    className="leaflet-control-zoom-in"
                    href="https://leafletjs.com/examples/quick-start/example-basic.html#"
                    title="Zoom in"
                    role="button"
                    aria-label="Zoom in"
                  >
                    +
                  </a>
                  <a
                    className="leaflet-control-zoom-out"
                    href="https://leafletjs.com/examples/quick-start/example-basic.html#"
                    title="Zoom out"
                    role="button"
                    aria-label="Zoom out"
                  >
                    −
                  </a>
                </div>
              </div>
              <div className="leaflet-top leaflet-right" />
              <div className="leaflet-bottom leaflet-left" />
              <div className="leaflet-bottom leaflet-right">
                <div className="leaflet-control-attribution leaflet-control">
                  <a
                    href="http://leafletjs.com/"
                    title="A JS library for interactive maps"
                  >
                    Leaflet
                  </a>
                  | Map data ©
                  <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
                  contributors,
                  <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                    CC-BY-SA
                  </a>
                  , Imagery © <a href="https://www.mapbox.com/">Mapbox</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
