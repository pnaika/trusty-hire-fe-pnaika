import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export class AuthenticatedRoutesWrapper extends Component {
    constructor() {
        super();
    }

    render() {
        const {
            shellComponent: ShellComponent,
            children,
            ...extraProps
        } = this.props;

        return (
            <Route
                {...extraProps}
                render={(props) =>
                    <ShellComponent children={children} {...props} />}
            />
        );
    }
}

AuthenticatedRoutesWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    shellComponent: PropTypes.func
};


export default AuthenticatedRoutesWrapper;