import './add-applicant-details.scss';

import React, { Component } from 'react';
import ApplicantInfoForm from './ApplicantInfoForm';

export class AddApplicantDetails extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        console.log(values);
    }

    render() {
        return (
            <div className="add-applicant-details-page">
                <h1>ADD NEW APPLICANT</h1>

                <ApplicantInfoForm  onSubmit={this.submit}/>
            </div>
        );
    }
}


export default AddApplicantDetails;
