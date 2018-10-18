import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import Ranking from '../component/Ranking';

import axios from "axios";

class RankingContainer extends Component {
    
    state = {
        rankingData: null
    }

    componentDidMount() {
        axios.get('http://ec2.istruly.sexy:1234/rank')
            .then(response => {
                console.log('1');
                console.log(response);
            }).catch(err => {
                console.log('2')
                console.log(err);
            })
    }

    render() {
        const { history, location } = this.props;

        return (
            <div>
                <HeaderContainer history={history} location={location}/>
                <Ranking rankingData={this.state.rankingData}/>
            </div>
        );
    }
}

export default RankingContainer;