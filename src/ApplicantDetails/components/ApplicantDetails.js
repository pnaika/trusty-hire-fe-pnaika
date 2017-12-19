import './applicant-details.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getApplicantDetails } from '../actions';
import { withRouter } from 'react-router-dom';
import { map, forOwn } from 'lodash';
import { setBreadcrumbs } from '../../Breadcrumbs';
import * as qs from 'query-string';
import CardController from '../../_common/CardController';

export class ApplicantDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { location } = this.props;
        const id = qs.parse(location.search).id;
        this.props.setBreadcrumbs([{label: 'applicant details', link: '/applicant-details'}]);

        this.props.getApplicantDetails(id);

    }

    render() {
        const { applicantDetails } = this.props;

        const WEBSITE_INFORMATION = [];
        const EXPERIENCE_INFORMATION = [];
        let EDUCATION_INFORMATION = [];
        let WORK_INFORMATION = [];

        const PERSONAL_INFORMATION = [
            {
                label: 'Email ID :',
                value: applicantDetails.email || ''
            },
            {
                label: 'Phone Number : ',
                value: applicantDetails.contactNumber || ''
            },
            {
                label: 'Gender : ',
                value: applicantDetails.gender || ''
            },
            {
                label: 'Country of Citizenship: ',
                value: applicantDetails.countryOfCitizenship || ''
            }
        ];

        map(applicantDetails.skillSet, (value) => {
            EXPERIENCE_INFORMATION.push({
                label: value.skills + ' ',
                value: value.experience + ' years' || 'N/A'
            });
        });

        map(applicantDetails.websites, (value) => {
            forOwn(value, (key, value) => {
                WEBSITE_INFORMATION.push({
                    label: value + ' : ',
                    value: key
                });
            });
        });


        return (
            <div className="applicant-details-page">
                <Helmet>
                    <title>Applicant Details</title>
                </Helmet>
                <h1>Applicant Details</h1>

                <div className="applicant-details">

                    <div className="row">

                        <section className="col-md-8">
                            <h3>Personal Details</h3>
                            <CardController
                                cardHeader={applicantDetails.firstName + ' ' + applicantDetails.lastName}
                                cardDetails={PERSONAL_INFORMATION}
                                isExpanded="true"/>
                        </section>

                        <section className="col-md-4">
                            <h3>Skillset Details</h3>
                            <CardController
                                cardHeader={'Experience Information'}
                                cardDetails={EXPERIENCE_INFORMATION}
                                isExpanded="true"/>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-md-8">
                            <h3>Education Details</h3>
                            {
                                map(applicantDetails.education, (value, key) => {
                                    EDUCATION_INFORMATION = [];
                                    forOwn(value, (key, value) => {
                                        EDUCATION_INFORMATION.push({
                                            label: value + ' : ',
                                            value: key
                                        });
                                    });
                                    return <CardController
                                        cardHeader={value.type}
                                        cardDetails={EDUCATION_INFORMATION}/>;

                                })
                            }
                        </section>

                        <section className="col-md-4">
                            <h3>Website and more</h3>
                            <CardController
                                cardHeader={'Websites'}
                                cardDetails={WEBSITE_INFORMATION}/>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-md-6">
                            <h3>Work Experience Details</h3>
                            {
                                map(applicantDetails.experience, (value, key) => {
                                    EDUCATION_INFORMATION = [];
                                    forOwn(value, (key, value) => {
                                        WORK_INFORMATION.push({
                                            label: value + ' : ',
                                            value: key
                                        });
                                    });
                                    return <CardController
                                        cardHeader={value.company}
                                        cardDetails={WORK_INFORMATION}/>;

                                })
                            }
                        </section>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        applicantDetails: state.applicantDetails.applicantDetails
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        getApplicantDetails: (id) => {
            dispatch(getApplicantDetails(id));
        },
        setBreadcrumbs: (breadcrumbs) => {
            dispatch(setBreadcrumbs(breadcrumbs));
        }
    };
}

export default withRouter(
    connect(mapStatetoProps, mapDispatchtoProps)(ApplicantDetails)
);
