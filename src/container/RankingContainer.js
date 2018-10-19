import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import Ranking from '../component/Ranking';
import Modal from '../component/Modal';

import axios from "axios";

class RankingContainer extends Component {
    
    state = {   
        rankingData: [[],[],[],[],[]]
    }

    interval = null;

    getData = () => {
        axios.get('http://ec2.istruly.sexy:1234/rank')
            .then(response => {
                this.setState({
                    rankingData: response.data.map,
                    modal: false
                })
                console.log(response.data)
            }).catch(err => {
                console.log(err);
                if(err.response.status === 406) this.setState({modal: true});
            })
    }

    componentDidMount() {
        this.getData()
        this.interval = setInterval(this.getData, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        const { history, location } = this.props;

        return (
            <div>
                <HeaderContainer history={history} location={location}/>
                <Ranking rankingData={this.state.rankingData}/>
                <Modal modalStatus={this.state.modal}/>
            </div>
        );
    }
}

export default RankingContainer;