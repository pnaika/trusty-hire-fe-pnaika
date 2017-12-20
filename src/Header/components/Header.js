import './header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../Breadcrumbs';
import LogoutButton from '../../Auth/components/LogoutButton';
import UserProfileDropdown from './UserProfileDropdown';

export class Header extends Component {
    constructor() {
        super();
    }

    render() {
        const userProfileMenuItems = [ <LogoutButton /> ];

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

                        <ul className="nav navbar-nav header-icons-container pull-right">
                            <UserProfileDropdown
                                menuItems={userProfileMenuItems}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
