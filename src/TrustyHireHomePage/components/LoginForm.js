import './trustyhirehomepage.scss';

import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import {
    TextField
} from 'redux-form-material-ui';

export class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.requiredFields = this.requiredFields.bind(this);
    }

    requiredFields(value) {
        if (value === null || value === undefined) {
            return 'Required';
        }

        return undefined;
    }

    componentDidMount() {
        this.refs.name // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus(); // on TextField
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} className="applicant-form">
                    <Field
                        name="username"
                        component={TextField}
                        hintText="User name / Email"
                        floatingLabelText="User name/Email"
                        validate={this.requiredFields}
                        ref="name"
                        withRef
                    />

                    <Field
                        name="password"
                        component={TextField}
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        validate={this.requiredFields}
                    />

                    <div className="login-form-button margin-top-10">
                        <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Login</button>
                        <button
                            className="btn btn-default"
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                        >
                            Clear
                        </button>
                    </div>
            </form>);
    }
}

const selector = formValueSelector('loginForm');

LoginForm = connect(state => ({
    newApplicantInfo: selector(state, 'loginForm')
}))(LoginForm);

LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

export default LoginForm;