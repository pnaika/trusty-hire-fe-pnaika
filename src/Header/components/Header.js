import './header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../Breadcrumbs';

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
                        <div className="header-breadcrumbs">
                            <Breadcrumbs />
                        </div>

                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
