import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

export class LinkFormatter extends Component {
    render() {
        const {
            pathValue,
            dependentValues,
            defaultValue,
            path,
            search
        } = this.props;

        const printPathValue = get(dependentValues, pathValue, defaultValue);

        return (
            <Link
                to={{
                    pathname: path,
                    search: search
                }}
            >
                { printPathValue }
            </Link>
        );
    }
}

LinkFormatter.defaultProps = {
    defaultValue: '',
    search: ''
};

LinkFormatter.propTypes = {
    defaultValue: PropTypes.string,
    displayValue: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    pathValue: PropTypes.string.isRequired,
    search: PropTypes.string
};

export default LinkFormatter;
