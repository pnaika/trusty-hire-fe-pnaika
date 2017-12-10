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
                            className="navbar-brand"
                            to={'/'}
                        >
                            <img src="../../_app/images/th03.png" className="header-logo"/>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
