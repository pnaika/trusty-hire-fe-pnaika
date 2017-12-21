import './../../TrustyHireHomePage/components/trustyhirehomepage.scss';
import './newuser.scss';

import React, { Component } from 'react';
import NewUserForm from './NewUserForm';
import { connect } from 'react-redux';
import { getLoginInformation } from '../../TrustyHireHomePage/actions';

export class NewUser extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(loginInfo) {
        this.props.getLoginInformation(loginInfo);
    }

    render() {
        return (
            <div className="new-user">
                <a href="./" className="pull-right">  Back to Login Page</a>
                <header>New User</header>
                <NewUserForm  onSubmit={this.submit}/>
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

export default connect(null, mapDispatchtoProps)(NewUser);