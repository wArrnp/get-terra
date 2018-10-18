import React, { Component, Fragment } from 'react';
import Header from '../component/Header';

class HeaderContainer extends Component {

    handlePaging = (path) => {
        const { location, history } = this.props;

        if(location.path !== path){
            history.push(path)
        }
    }

    render() {
        return (
            <Fragment>
                <Header onPaging={this.handlePaging} pathname={this.props.location.pathname}/>
            </Fragment>
        );
    }
}

export default HeaderContainer;