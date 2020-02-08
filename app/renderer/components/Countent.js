import React, { Component, Fragment } from "react";

import CountentWrapper from "./CountentWrapper";

import Section from "./Navbar/NewSection";
class Countent extends Component {
  render() {
    let key = 0;
    return (
      <main className="cd-main-content">
        <nav className="cd-side-nav">
          <Section
            setCategory={true}
            nameCategory="State"
            //icon={} future icon
            name="Status"
            subSections={[
              {
                key: key++,
                name: "Connected",
                tagColor: "rgb(255, 197, 5)",
                value: "True"
              },
              {
                key: key++,
                name: "Device",
                tagColor: "rgb(83, 197, 38)",
                value: "CatSat-UAA"
              },
              {
                key: key++,
                name: "RSSI",
                tagColor: "rgb(83, 197, 38)",
                value: "120.76"
              }
            ]}
          />
          <Section
            setCategory={true}
            nameCategory="Sensors"
            //icon={} future icon
            name="DHT-22"
            subSections={[
              {
                key: key++,
                name: "Temperature",
                tagColor: "rgba(234,45,255)",
                value: "35º"
              },
              {
                key: key++,
                name: "Humidity",
                tagColor: "rgba(24,222,255)",
                value: "1200"
              }
            ]}
          />
          <Section
            setCategory={false}
            nameCategory="BMP"
            //icon={} future icon
            name="BMP"
            subSections={[
              {
                key: key++,
                name: "pressure",
                tagColor: "rgba(77,45,255)",
                value: "1303"
              },
              {
                key: key++,
                name: "temperature",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              }
            ]}
          />
          <Section
            setCategory={false}
            nameCategory="Magnetometer"
            //icon={} future icon
            name="Magnetometer"
            subSections={[
              {
                key: key++,
                name: "mx",
                tagColor: "rgba(77,45,255)",
                value: "1303"
              },
              {
                key: key++,
                name: "my",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              },
              {
                key: key++,
                name: "mz",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              }
            ]}
          />
          <Section
            setCategory={false}
            nameCategory="Accelerometer and Gyroscope"
            //icon={} future icon
            name="Accelerometer and Gyroscope"
            subSections={[
              {
                key: key++,
                name: "ax",
                tagColor: "rgba(77,45,255)",
                value: "1303"
              },
              {
                key: key++,
                name: "ay",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              },
              {
                key: key++,
                name: "az",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              },
              {
                key: key++,
                name: "gx",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              },
              {
                key: key++,
                name: "gy",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              },
              {
                key: key++,
                name: "gz",
                tagColor: "rgba(24,223,235)",
                value: "35º"
              }
            ]}
          />
          <Section
            setCategory={false}
            nameCategory="GPS"
            //icon={} future icon
            name="GPS"
            subSections={[
              {
                key: key++,
                name: "Lat",
                tagColor: "rgb(255, 197, 5)",
                value: "True"
              },
              {
                key: key++,
                name: "Long",
                tagColor: "rgb(83, 197, 38)",
                value: "CatSat-UAA"
              },
              {
                key: key++,
                name: "Height",
                tagColor: "rgb(255, 197, 5)",
                value: "True"
              },
              {
                key: key++,
                name: "Speed",
                tagColor: "rgb(83, 197, 38)",
                value: "CatSat-UAA"
              }
            ]}
          />
        </nav>
        <CountentWrapper />
      </main>
    );
  }
}
export default Countent;
