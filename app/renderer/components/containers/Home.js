import React, { Component, Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//REDUX
import { connect } from "react-redux";
import * as home_actions from "../../actions/catwan-actions";

import Header from "../Header"

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data_port: state.data_port
});

/* Magic to hook up the state to the props */
export default connect(
  mapStateToProps,
  home_actions
)(Home);
