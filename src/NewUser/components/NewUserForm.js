import './../../TrustyHireHomePage/components/trustyhirehomepage.scss';

import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';

export class NewUserForm extends Component {

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
        this.refs.username // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus(); // on TextField
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} className="applicant-form">
                <div>
                    <Field
                        name="username"
                        component={TextField}
                        hintText="User name"
                        floatingLabelText="User name"
                        validate={this.requiredFields}
                        ref="username"
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
                    <Field
                        name="email"
                        component={TextField}
                        hintText="Email"
                        floatingLabelText="Email"
                        validate={this.requiredFields}
                    />
                </div>

                <div className="login-form-button margin-top-10">
                    <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>
                        Save
                    </button>
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

const selector = formValueSelector('newUserForm');

NewUserForm = connect(state => ({
    newUserInfo: selector(state, 'newUserForm')
}))(NewUserForm);

NewUserForm = reduxForm({
    form: 'newUserForm'
})(NewUserForm);

export default NewUserForm;