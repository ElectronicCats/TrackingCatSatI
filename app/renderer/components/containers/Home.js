import React, { Component, Fragment } from "react";

//REDUX
import { connect } from "react-redux";
import * as home_actions from "../../actions/catwan-actions";

import Header from "../Header";
import Countent from "../Countent";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Header />
        <Countent />
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
