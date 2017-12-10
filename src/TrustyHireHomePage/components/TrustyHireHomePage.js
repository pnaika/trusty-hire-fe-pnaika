import './trustyhirehomepage.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TrustyHireHomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <header>Welcome to Trusty Hire</header>
                <Link to="./applicant-list">
                    <button className="btn btn-primary">Login</button>
                </Link>
            </div>);
    }
}

export default TrustyHireHomePage;