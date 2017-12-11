import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {
    AutoComplete,
    Checkbox,
    DatePicker,
    TimePicker,
    RadioButtonGroup,
    SelectField,
    Slider,
    TextField,
    Toggle
} from 'redux-form-material-ui';



class ApplicantInfoForm extends React.Component {


    constructor(props) {
        super(props);

        this.requiredFields = this.requiredFields.bind(this);
        this.contactNumberValidation = this.contactNumberValidation.bind(this);
        this.emailValidation = this.emailValidation.bind(this);

        this.state = {
            isFormValid: false
        };
    }


    // validation functions
    requiredFields(value) {
        if(value == null) {
            return 'Required';
            this.setState({
                isFormValid: false
            });
        } else {
            this.setState({
                isFormValid: true
            });
        }
    }
    // requiredFields = value => ((value == null) ? 'Required' : undefined);
    contactNumberValidation = value => ((value.length != 10) ? 'Invalid Phone Number' : undefined);
    emailValidation = value =>
        (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email'
            : undefined);

    componentDidMount() {
        this.refs.name // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus(); // on TextField
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const { isFormValid } = this.state;

        console.log(submitting);
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>Personal Information</h4>
                    <Field
                        name="firstName"
                        component={TextField}
                        hintText="First Name"
                        floatingLabelText="First Name"
                        validate={this.requiredFields}
                        ref="name"
                        withRef
                    />

                    <Field
                        name="lastName"
                        component={TextField}
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        validate={this.requiredFields}
                    />

                    <Field
                        name="email"
                        component={TextField}
                        hintText="Email"
                        floatingLabelText="Email"
                        validate={[this.requiredFields, this.emailValidation]}
                    />

                    <Field
                        name="contactNumber"
                        component={TextField}
                        hintText="Contact Number"
                        floatingLabelText="Contact Number"
                        validate={[this.requiredFields, this.contactNumberValidation]}
                    />

                    <h5>Gender: </h5>
                    <Field name="gender" component={RadioButtonGroup} validate={this.requiredFields}>
                        <RadioButton value="male" label="Male" />
                        <RadioButton value="female" label="Female" />
                        <RadioButton value="notMentioned" label="Prefer Not To Mention" />
                    </Field>
                </div>

                <div>
                    <Field
                        name="notes"
                        component={TextField}
                        hintText="Notes"
                        floatingLabelText="Notes"
                        multiLine
                        rows={2}
                    />
                </div>
                <div>
                    <Field
                        name="dataSource"
                        component={AutoComplete}
                        floatingLabelText="How did you find us?"
                        openOnFocus
                        filter={MUIAutoComplete.fuzzyFilter}
                        dataSource={['FaceBook', 'Ads', 'Website', 'TV', 'Other']}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
                    <button
                        className="btn btn-default"
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
                    </button>
                </div>
            </form>
        );
    }
}

const selector = formValueSelector('newApplicantInfo');

ApplicantInfoForm = connect(state => ({
    newApplicantInfo: selector(state, 'newApplicantInfo')
}))(ApplicantInfoForm);

ApplicantInfoForm = reduxForm({
    form: 'newApplicantInfo'
})(ApplicantInfoForm);

export default ApplicantInfoForm;