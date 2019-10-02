import React, { Component } from "react";
import Header from "../component/Header";

class HeaderContainer extends Component {
  render() {
    return <Header pathname={this.props.location.pathname} />;
  }
}

export default HeaderContainer;
