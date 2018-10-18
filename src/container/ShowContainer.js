import React, { Component, Fragment } from 'react';
import HeaderContainer from './HeaderContainer';
import Show from '../component/Show'

class ShowContainer extends Component {


    render() {
        const { history, location } = this.props;
        return (
            <Fragment>
                <HeaderContainer history={history} location={location}/>
                <Show />
            </Fragment>
        );
    }
}

export default ShowContainer;