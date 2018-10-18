import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const { onPaging, pathname } = this.props;
        return (
            <div className="header-wrapper">
                <button className={pathname === '/show'? 'header-btn clicked': 'header-btn'} onClick={() => onPaging('/show')}>동아리 보기</button>
                <button className={pathname === '/show'? 'header-btn': 'header-btn clicked'} onClick={() => onPaging('/ranking')}>현재 팀 순위</button>
            </div>
        );
    }
}

export default Header;