import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { connect } from "react-redux";
import * as home_actions from "../actions/catwan-actions";

class MapComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <Map
        center={[this.props.position.lat, this.props.position.lng]}
        zoom={this.props.position.zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[this.props.position.lat, this.props.position.lng]} />
      </Map>
    );
  }
}

const mapStateToProps = state => ({
  position: state.position
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(MapComponent);
