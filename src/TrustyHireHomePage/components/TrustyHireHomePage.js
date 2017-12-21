import './trustyhirehomepage.scss';

import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getLoginInformation } from '../../TrustyHireHomePage/actions';

export class TrustyHireHomePage extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(loginInfo) {
        console.log('loginInfo : ', loginInfo)
        this.props.getLoginInformation(loginInfo);
    }

    render() {
        return (
            <div className="home-page">
                <header>WELCOME TO TRUSTY HIRE</header>
                <LoginForm  onSubmit={this.submit}/>
                <div className="row margin-bottom-10">
                    <a className="col-md-6" href="./">
                        Forgot Password ?
                    </a>
                    <a className="col-md-6" href="./new-user">
                        New User? Sign Up
                    </a>
                </div>
            </div>);
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        getLoginInformation: (loginInfo) => {
            dispatch(getLoginInformation(loginInfo));
        }
    };
}

export default connect(null, mapDispatchtoProps)(TrustyHireHomePage);