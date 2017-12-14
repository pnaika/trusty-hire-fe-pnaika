import './trustyhirehomepage.scss';

import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {connect} from "react-redux";
import {getLoginInformation} from "../../TrustyHireHomePage/actions";

export class TrustyHireHomePage extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(newApplicant) {
        console.log(JSON.stringify(newApplicant));
        this.props.getLoginInformation(newApplicant);
    }

    render() {
        return (
            <div className="home-page">
                <header>Welcome to Trusty Hire</header>
                <LoginForm  onSubmit={this.submit}/>
            </div>);
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        getLoginInformation: () => {
            dispatch(getLoginInformation());
        }
    };
}

export default connect(null, mapDispatchtoProps)(TrustyHireHomePage);