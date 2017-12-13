import './add-applicant-details.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector, FieldArray} from 'redux-form';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import {
    AutoComplete,
    DatePicker,
    TextField,
} from 'redux-form-material-ui';
import { SKILLSET_FIELD_VALUES, EXPERIENCE_FIELD_VALUES, EDUCATION_FIELD_VALUES, WEBSITES_FIELD_VALUES} from '../../_app/constantJson';
import RenderMultipleFields from "./RenderMutipleFields";

class ApplicantInfoForm extends Component {
    constructor(props) {
        super(props);

        this.requiredFields = this.requiredFields.bind(this);
        this.contactNumberValidation = this.contactNumberValidation.bind(this);
        this.emailValidation = this.emailValidation.bind(this);

        this.state = {
            isFormValid: false
        };
    }

    requiredFields(value) {
        if (value === null || value === undefined) {
            return 'Required';
        }

        return undefined;
    }

    contactNumberValidation(value) {
        if (value && value.length !== 10) {
            return 'Invalid Phone Number';
        }
        return undefined;
    }

    emailValidation(value) {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return 'Invalid email';
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
                <div id="personal-information">
                    <h2>Personal Information</h2>
                    <div className="personal-information">
                        <div>
                            <Field
                                name="firstName"
                                component={TextField}
                                hintText="First Name"
                                floatingLabelText="Tell us your first name"
                                validate={this.requiredFields}
                                ref="name"
                                withRef
                            />

                            <Field
                                name="lastName"
                                component={TextField}
                                hintText="Last Name"
                                floatingLabelText="Last name"
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

                            <Field
                                name="married"
                                component={AutoComplete}
                                floatingLabelText="Are you married?"
                                openOnFocus
                                filter={MUIAutoComplete.fuzzyFilter}
                                dataSource={['Yes', 'No']}
                            />
                        </div>
                    </div>
                    <h5>Address:</h5>
                    <Field
                        name="address.line1"
                        component={TextField}
                        hintText="Line 1"
                        floatingLabelText="Line 2"
                        validate={this.requiredFields}
                    />

                    <Field
                        name="address.line2"
                        component={TextField}
                        hintText="Line 2"
                        floatingLabelText="Line 2"
                    />

                    <Field
                        name="address.city"
                        component={TextField}
                        hintText="City"
                        floatingLabelText="City"
                        validate={this.requiredFields}
                    />

                    <Field
                        name="address.state"
                        component={TextField}
                        hintText="State"
                        floatingLabelText="State"
                        validate={this.requiredFields}
                    />

                    <Field
                        name="address.country"
                        component={TextField}
                        hintText="Country"
                        floatingLabelText="Country"
                        validate={this.requiredFields}
                    />
                    <h5>Gender: </h5>
                    <Field name="gender" component="select">
                        <option/>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="notMentioned">Prefer Not To Mention</option>
                    </Field>
                    <br/>
                    <Field
                        name="countryOfCitizenship"
                        component={TextField}
                        hintText="Country Of Citizenship"
                        floatingLabelText="Country Of Citizenship"
                        validate={this.requiredFields}
                    />

                </div>

                <div className="margin-top-10" id="experience-information">
                    <h2>Work Experience</h2>
                    <div className="experience-info-form">
                        <div className="margin-bottom-10 ">
                            <FieldArray name="experience"
                                        component={RenderMultipleFields}
                                        label={EXPERIENCE_FIELD_VALUES.label}
                                        keyValues={EXPERIENCE_FIELD_VALUES.keyValue}
                                        repeatTimes={EXPERIENCE_FIELD_VALUES.repeatTimes}/>
                        </div>
                        <div>
                            <FieldArray name="skillSet"
                                        component={RenderMultipleFields}
                                        label={SKILLSET_FIELD_VALUES.label}
                                        keyValues={SKILLSET_FIELD_VALUES.keyValue}
                                        repeatTimes={SKILLSET_FIELD_VALUES.repeatTimes}/>
                        </div>
                    </div>
                </div>

                <div className="margin-top-10" id="education-information">
                    <h2>Education</h2>
                    <div className="experience-info-form">
                        <div className="margin-bottom-10 ">
                            <FieldArray name="education"
                                        component={RenderMultipleFields}
                                        label={EDUCATION_FIELD_VALUES.label}
                                        keyValues={EDUCATION_FIELD_VALUES.keyValue}
                                        repeatTimes={EDUCATION_FIELD_VALUES.repeatTimes}/>
                        </div>
                    </div>
                </div>

                <div className="margin-top-10" id="visa-information">
                    <h2>Visa Details</h2>
                    <div>
                        <Field
                            name="visaDetails.visaStatus"
                            component={TextField}
                            hintText="What Type of Visa do you hold?"
                            floatingLabelText="Visa Status"
                            validate={this.requiredFields}
                        />
                    </div>
                    <div>
                        <Field
                            name="visaDetails.validity"
                            component={DatePicker}
                            hintText="Visa valid till?"
                            floatingLabelText="Visa validity"
                            validate={this.requiredFields}
                        />
                    </div>
                </div>

                <div className="margin-top-10" id="website-information">
                    <h2>Websites or any other links?</h2>
                    <div className="experience-info-form">
                        <div className="margin-bottom-10 ">
                            <FieldArray name="websites"
                                        component={RenderMultipleFields}
                                        label={WEBSITES_FIELD_VALUES.label}
                                        keyValues={WEBSITES_FIELD_VALUES.keyValue}
                                        repeatTimes={WEBSITES_FIELD_VALUES.repeatTimes}/>
                        </div>
                    </div>
                </div>

                <div className="margin-top-10">
                    <Field
                        name="notes"
                        component={TextField}
                        hintText="Notes"
                        floatingLabelText="Notes"
                        multiLine
                        rows={2}
                    />
                </div>
                <div className="margin-top-10">
                    <Field
                        name="dataSource"
                        component={AutoComplete}
                        floatingLabelText="How did you find us?"
                        openOnFocus
                        filter={MUIAutoComplete.fuzzyFilter}
                        dataSource={['FaceBook', 'Ads', 'Website', 'TV', 'Other']}
                    />
                </div>
                <div className="applicant-form-botton margin-top-10">
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