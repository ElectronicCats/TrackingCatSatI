import React, { Component } from "react";
import MapComponent from "./MapComponent";
import SimpleLineChart from "./Charts/SimpleLineChart";

import { data } from "./Charts/data";

import { connect } from "react-redux";
import * as home_actions from "../actions/catwan-actions";

class Countent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <MapComponent />
        <SimpleLineChart title="Chart Test 1" data={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data_port.data,
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(Countent);
