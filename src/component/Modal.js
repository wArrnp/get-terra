import React, { Component } from 'react';

import './Modal.css'

class Modal extends Component {
    render() {
        const { modalStatus } = this.props;
        return (
            <div className="modal-background" style={modalStatus ? {display: 'flex'} : {display: 'none'}}>
                <div className="modal-wrapper">
                    <span>게임 시작을 기다리는 중입니다.</span>
                </div>
            </div>
        );
    }
}

export default Modal;