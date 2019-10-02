import React, { Component } from "react";
import "./Show.css";

const colorList = ["blue", "green", "yellow", "violet"];

class Show extends Component {
  render() {
    const { mapData } = this.props;
    const mapList = mapData.map(data => {
      let color;
      if (data[1] === -1) color = "gray";
      else color = colorList[data[1]];
      return (
        <span className={"show-content " + color} key={data[0]}>
          {data[0]}
        </span>
      );
    });
    return (
      <div className="show-wrapper">
        <div className="show-example-wrapper">
          <span className="show-example yellow"></span>
          <span className="show-example green"></span>
          <span className="show-example blue"></span>
          <span className="show-example violet"></span>
          <span className="show-example gray"></span>
        </div>
        <div className="show-content-wrapper">{mapList}</div>
      </div>
    );
  }
}

export default Show;
