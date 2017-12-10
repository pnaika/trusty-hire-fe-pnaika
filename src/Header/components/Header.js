import './header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container-fluid header-background">
                    <div className="navbar-header">
                        <Link
                            className="navbar-brand header-logo"
                            to={'/'}
                        >
                            LOGO
                        </Link>
                        <div className="pull-right block-header">Trusty-Hire</div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
