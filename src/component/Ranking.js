import React, { Component } from 'react';

import './Ranking.css'

class Ranking extends Component {
    state = {
        teamList : ['blue', 'green', 'yellow', 'violet']
    }
    render() {
        const { rankingData } = this.props;

        return (
            <div className="ranking-wrapper">
                <div className="ranking-team">
                    <span className={'ranking-team-circle ' + this.state.teamList[rankingData[0][0]]}>{rankingData[0][1]}개 부스 <br /> ({rankingData[0][1] / 18} %)</span>
                    <span className="ranking-team-first">1</span>
                </div>
                <div className="ranking-team">
                    <span className={'ranking-team-circle ' + this.state.teamList[rankingData[1][0]]}>{rankingData[1][1]}개 부스 <br /> ({rankingData[1][1] / 18} %)</span>
                    <span className="ranking-team-second">2</span>
                </div>
                <div className="ranking-team">
                    <span className={'ranking-team-circle ' + this.state.teamList[rankingData[2][0]]}>{rankingData[2][1]}개 부스 <br /> ({rankingData[2][1] / 18} %)</span>
                    <span className="ranking-team-third">3</span>
                </div>
                <div className="ranking-team">
                    <span className={'ranking-team-circle ' + this.state.teamList[rankingData[3][0]]}>{rankingData[3][1]}개 부스 <br /> ({rankingData[3][1] / 18} %)</span>
                </div>
            </div>
        );
    }
}

export default Ranking;