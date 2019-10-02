import React, { Component } from "react";
import HeaderContainer from "./HeaderContainer";
import Show from "../component/Show";
import Modal from "../component/Modal";

import axios from "axios";

class ShowContainer extends Component {
  state = {
    mapData: [],
    modal: false
  };

  interval = null;

  getData = () => {
    axios
      .get("http://ec2.istruly.sexy:1234/map/web")
      .then(response => {
        this.setState({
          mapData: response.data.map,
          modal: false
        });
        console.log(response.data.map);
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 406) this.setState({ modal: true });
      });
  };

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    const { history, location } = this.props;
    return (
      <>
        <HeaderContainer history={history} location={location} />
        <Show mapData={this.state.mapData} />
        <Modal modalStatus={this.state.modal} />
      </>
    );
  }
}

export default ShowContainer;
