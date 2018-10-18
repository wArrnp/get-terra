import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    render() {
        return (
            <div className="show-wrapper">
                <div className="show-example-wrapper">
                    <span className="show-example yellow"></span>
                    <span className="show-example green"></span>
                    <span className="show-example blue"></span>
                    <span className="show-example violet"></span>
                    <span className="show-example gray"></span>
                </div>    
                <div className="show-content-wrapper">
                    <span className="show-content yellow">동아리</span>
                    <span className="show-content green">동아리</span>
                    <span className="show-content blue">동아리</span>
                    <span className="show-content gray">동아리</span>
                    <span className="show-content yellow">동아리</span>
                    <span className="show-content yellow">동아리</span>
                    <span className="show-content blue">동아리</span>
                    <span className="show-content gray">동아리</span>
                    <span className="show-content violet">동아리</span>
                </div>  
            </div>
        );
    }
}

export default Show;