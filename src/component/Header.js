import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const { pathname } = this.props;
    return (
      <div className="header-wrapper">
        <Link
          className={
            pathname === "/show" ? "header-link clicked" : "header-link"
          }
          to="/show"
        >
          동아리 보기
        </Link>
        <Link
          className={
            pathname === "/show" ? "header-link" : "header-link clicked"
          }
          to="/ranking"
        >
          현재 팀 순위
        </Link>
      </div>
    );
  }
}

export default Header;
