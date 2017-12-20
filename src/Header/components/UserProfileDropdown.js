import './user-profile-dropdown.scss';
import ProfileIcon from '!svg-react-loader!../../_app/images/icon_profile.svg';
import React from 'react';
import { forEach } from 'lodash';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export class UserProfileDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUserMenuOpen: false
        };

        this.setUserMenuState = this.setUserMenuState.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    setUserMenuState(isUserMenuOpen) {
        this.setState({
            isUserMenuOpen: !isUserMenuOpen
        });
    }

    handleClickOutside(e) {
        let shouldSetUserMenu = true;

        if (this.state.isUserMenuOpen) {
            forEach(e.path, (pathValue) => {
                if (pathValue.className === 'user-menu') {
                    shouldSetUserMenu = false;
                    return false; // break loop early
                }
            });
            if (shouldSetUserMenu)
                this.setUserMenuState(this.state.isUserMenuOpen);
        }
    }

    render() {
        const { menuItems, currentUserName } = this.props;
        const { isUserMenuOpen } = this.state;

        const userMenuTransitionProps = {
            classNames: 'user-menu-transition',
            style: {
                transitionDuration: '300ms'
            },
            timeout: 300
        };

        return (
            <li className="user-menu">
                <a
                    className="user-menu-icon"
                    onClick={() => {
                        this.setUserMenuState(isUserMenuOpen);
                    }}
                >
                    <ProfileIcon className="header-icon" />
                    {/*<span className="glyphicon glyphicon glyphicon-user user-icon pull-right" aria-hidden="true"></span>*/}
                </a>
                <TransitionGroup>
                    {isUserMenuOpen &&
                        <CSSTransition {...userMenuTransitionProps}>
                            <div className="user-menu-dropdown-container">
                                <div className="user-menu-dropdown">
                                    <div className="user-menu-dropdown-header">
                                        {currentUserName}
                                    </div>
                                    <ul>
                                        {menuItems.map((menuItem, index) => {
                                            return (
                                                <li key={index}>
                                                    <a>
                                                        {menuItem}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="arrow-up" />
                            </div>
                        </CSSTransition>}
                </TransitionGroup>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUserName: state.loginDetails.loginDetails.username
    };
};

export default connect(mapStateToProps)(UserProfileDropdown);
