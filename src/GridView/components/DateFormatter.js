import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import moment from 'moment';

export class DateFormatter extends Component {
    render(){
        const { format, dependentValues, dateField, defaultValue } = this.props;

        return(
            <span>
                { moment(get(dependentValues, dateField)).format(format) || defaultValue }
            </span>
        );
    }
}

DateFormatter.defaultProps = {
    defaultValue: ' '
};

DateFormatter.propTypes = {
    dateField: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    format: PropTypes.string.isRequired

};

export default DateFormatter;
