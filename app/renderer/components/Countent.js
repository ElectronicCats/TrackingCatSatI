import React, { Component, Fragment } from "react";

import CountentWrapper from "./CountentWrapper";

import Section from "./Navbar/NewSection";

import { connect } from "react-redux";
import * as home_actions from "../actions/catwan-actions";

class Countent extends Component {
  render() {
    console.log(this.props.data[0])
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
                value: this.props.data[0] !== null ? "true" : "false"
              },
              {
                key: key++,
                name: "Device",
                tagColor: "rgb(83, 197, 38)",
                value: this.props.data[0]
              },
              {
                key: key++,
                name: "RSSI",
                tagColor: "rgb(83, 197, 38)",
                value: this.props.data[18]
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
                value: this.props.data[1]
              },
              {
                key: key++,
                name: "Humidity",
                tagColor: "rgba(24,222,255)",
                value: this.props.data[2]
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
                value: this.props.data[3]
              },
              {
                key: key++,
                name: "temperature",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[4]
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
                value: this.props.data[5]
              },
              {
                key: key++,
                name: "my",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[6]
              },
              {
                key: key++,
                name: "mz",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[7]
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
                value: this.props.data[8]
              },
              {
                key: key++,
                name: "ay",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[9]
              },
              {
                key: key++,
                name: "az",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[10]
              },
              {
                key: key++,
                name: "gx",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[11]
              },
              {
                key: key++,
                name: "gy",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[12]
              },
              {
                key: key++,
                name: "gz",
                tagColor: "rgba(24,223,235)",
                value: this.props.data[13]
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
                value: this.props.data[14]
              },
              {
                key: key++,
                name: "Long",
                tagColor: "rgb(83, 197, 38)",
                value: this.props.data[15]
              },
              {
                key: key++,
                name: "Height",
                tagColor: "rgb(255, 197, 5)",
                value: this.props.data[16]
              },
              {
                key: key++,
                name: "Speed",
                tagColor: "rgb(83, 197, 38)",
                value: this.props.data[17]
              }
            ]}
          />
        </nav>
        <CountentWrapper/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data_port.data
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(Countent);
