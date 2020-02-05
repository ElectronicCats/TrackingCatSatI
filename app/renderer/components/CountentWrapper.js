import React, { Component, Fragment } from "react";
import MapComponent from "./MapComponent";
import SimpleLineChart from "./Charts/SimpleLineChart";

import { data } from "./Charts/data"
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
export default Countent;
