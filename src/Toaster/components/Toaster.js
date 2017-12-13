import './toaster.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { isEmpty } from 'lodash';
import { actions } from '../';
import { connect } from 'react-redux';
import CancelIcon from '!svg-react-loader!../../_app/images/cancel-copy.svg';

export class Toaster extends Component {
    constructor(props) {
        super(props);

        this.onDismiss = this.onDismiss.bind(this);
        this.getToastMessages = this.getToastMessages.bind(this);
    }

    onDismiss(index) {
        this.props.deleteToastMessage(index);
    }

    getToastMessages() {
        const { toastMessages } = this.props;
        const toasterTransitionProps = {
            classNames: 'toaster-transition',
            style: {
                transitionDuration: '2000ms'
            },
            timeout: {
                enter: 1500,
                exit: 2000
            }
        };

        return (
            <TransitionGroup>
                {!isEmpty(toastMessages) &&
                    toastMessages.map((message, index) => {
                        return (
                            <CSSTransition
                                {...toasterTransitionProps}
                                key={message.index || index}
                            >
                                <div className={`toaster ${message.type}`}>
                                    <div className="toaster-message">
                                        {message.text}
                                    </div>
                                    <a
                                        className="remove-toaster"
                                        onClick={() =>
                                            this.onDismiss(message.index)}
                                    >
                                        <CancelIcon />
                                    </a>
                                </div>
                            </CSSTransition>
                        );
                    })}
            </TransitionGroup>
        );
    }

    render() {
        return <div className="toaster-wrapper"> {this.getToastMessages()}</div>;
    }
}

Toaster.propTypes = {
    deleteToastMessage: PropTypes.func,
    toastMessages: PropTypes.array
};

function mapDispatchtoProps(dispatch) {
    return {
        deleteToastMessage: (toastIndex) => {
            dispatch(actions.deleteToastMessage(toastIndex));
        }
    };
}

export default connect(null, mapDispatchtoProps)(Toaster);
