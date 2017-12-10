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
        } = this.props;

        const printPathValue = get(dependentValues, pathValue, defaultValue);

        return (
            <Link
                to={{
                    pathname: '/part-details',
                    search: `?id=${printPathValue}`
                }}
            >
                View Details
            </Link>
        );
    }
}

LinkFormatter.defaultProps = {
    defaultValue: '',
};

LinkFormatter.propTypes = {
    defaultValue: PropTypes.string,
    displayValue: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    pathValue: PropTypes.string.isRequired,
};

export default LinkFormatter;
