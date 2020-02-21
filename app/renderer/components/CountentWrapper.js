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
          graphName="graphTemperature"
        />
        <SimpleLineChart
          dataKeyA="mx"
          dataKeyB="my"
          dataKeyC="mz"
          title="Magnetometer"
          barColor="#3E38F2"
          data={this.props.graphMagnetometer}
          graphName="graphMagnetometer"
        />
        <SimpleLineChart
          dataKeyA="ax"
          dataKeyB="ay"
          dataKeyC="az"
          title="Accelerometer"
          barColor="#5C73F2"
          data={this.props.graphAccelerometer}
          graphName="graphAccelerometer"
        />
        <SimpleLineChart
          dataKeyA="gx"
          dataKeyB="gy"
          dataKeyC="gz"
          title="Gyroscope"
          barColor="#829FD9"
          data={this.props.graphGyroscope}
          graphName="graphGyroscope"
        />
        <SimpleLineChart
          dataKeyA="Height"
          dataKeyB="Speed"
          title="GPS"
          barColor="#230A59"
          data={this.props.graphGPS}
          graphName="graphGPS"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data_port.data,
  graphTemperature: state.data_port.graphTemperature,
  graphMagnetometer: state.data_port.graphMagnetometer,
  graphAccelerometer: state.data_port.graphAccelerometer,
  graphGyroscope: state.data_port.graphGyroscope,
  graphGPS: state.data_port.graphGPS
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(Countent);
