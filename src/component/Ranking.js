import React, { Component } from "react";

import "./Ranking.css";

function getRankingPercent(amount) {
  return ((amount / 25) * 100).toPrecision(4);
}

class Ranking extends Component {
  state = {
    teamList: ["blue", "green", "yellow", "violet"]
  };
  render() {
    const { rankingData } = this.props;

    return (
      <div className="ranking-wrapper">
        <div className="ranking-team-wrapper">
          <span
            className={
              "ranking-team-circle " + this.state.teamList[rankingData[0][0]]
            }
          >
            {rankingData[0][1]}개 부스 <br /> (
            {getRankingPercent(rankingData[0][1])} %)
          </span>
          <span className="ranking-team ranking-team-first">1</span>
        </div>
        <div className="ranking-team-wrapper">
          <span
            className={
              "ranking-team-circle " + this.state.teamList[rankingData[1][0]]
            }
          >
            {rankingData[1][1]}개 부스 <br /> (
            {getRankingPercent(rankingData[1][1])} %)
          </span>
          <span className="ranking-team ranking-team-second">2</span>
        </div>
        <div className="ranking-team-wrapper">
          <span
            className={
              "ranking-team-circle " + this.state.teamList[rankingData[2][0]]
            }
          >
            {rankingData[2][1]}개 부스 <br /> (
            {getRankingPercent(rankingData[2][1])} %)
          </span>
          <span className="ranking-team ranking-team-third">3</span>
        </div>
        <div className="ranking-team-wrapper">
          <span
            className={
              "ranking-team-circle " + this.state.teamList[rankingData[3][0]]
            }
          >
            {rankingData[3][1]}개 부스 <br /> (
            {getRankingPercent(rankingData[3][1])} %)
          </span>
        </div>
      </div>
    );
  }
}

export default Ranking;
