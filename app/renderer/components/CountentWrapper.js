import React, { Component } from "react";
import MapComponent from "./MapComponent";
import SimpleLineChart from "./Charts/SimpleLineChart";

import { connect } from "react-redux";
import * as home_actions from "../actions/catwan-actions";

class Countent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <MapComponent />
        <SimpleLineChart
          dataKeyA="temp"
          dataKeyB="hum"
          dataKeyC="press"
          title="Temperature"
          barColor="#3E38F2"
          data={this.props.graphTemperature}
        />
        <SimpleLineChart
          dataKeyA="temp"
          dataKeyB="hum"
          dataKeyC="press"
          title="BMP"
          barColor="#3E38F2"
          data={this.props.graphTemperature}
        />
        <SimpleLineChart
          dataKeyA="temp"
          dataKeyB="hum"
          dataKeyC="press"
          title="Accelerometer"
          barColor="#5C73F2"
          data={this.props.graphTemperature}
        />
        <SimpleLineChart
          dataKeyA="temp"
          dataKeyB="hum"
          dataKeyC="press"
          title="Gyroscope"
          barColor="#829FD9"
          data={this.props.graphTemperature}
        />
        <SimpleLineChart
          dataKeyA="temp"
          dataKeyB="hum"
          dataKeyC="press"
          title="GPS"
          barColor="#230A59"
          data={this.props.graphTemperature}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data_port.data,
  graphTemperature: [
    ...[
      {
        name: "temp",
        temp:
          state.data_port.data[1] !== undefined ? state.data_port.data[1] : 0
      },
      {
        name: "hum %",
        hum: state.data_port.data[2] !== undefined ? state.data_port.data[2] : 0
      },
      {
        name: "press",
        press:
          state.data_port.data[3] !== undefined ? state.data_port.data[3] : 0
      }
    ]
  ]
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(Countent);
