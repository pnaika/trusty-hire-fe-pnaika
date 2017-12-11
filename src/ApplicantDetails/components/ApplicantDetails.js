import './applicant-details.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {getApplicantDetails} from '../actions';
import {withRouter} from 'react-router-dom';
import {map} from 'lodash';

export class ApplicantDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getApplicantDetails();
    }

    render() {
        const {applicantDetails} = this.props;
        return (
            <div className="applicant-details-page">
                <Helmet>
                    <title>Applicant Details</title>
                </Helmet>
                <h1>Applicant Details</h1>

                <div className="applicant-details">

                    <div className="row">
                        <section className="col-md-5">
                            <h3>Personal</h3>
                            <div>
                                <label> Name : </label>
                                <span>{applicantDetails.firstName || ''} {applicantDetails.lastName || ''}</span>
                            </div>
                            <div>
                                <label>email ID : </label>
                                <span>{applicantDetails.email || ''}</span>
                            </div>
                            <div>
                                <label>Phone Number : </label>
                                <span>{applicantDetails.phoneNumber || ''}</span>
                            </div>
                            <div>
                                <label>Gender : </label>
                                <span>{applicantDetails.gender || ''}</span>
                            </div>
                        </section>

                        <section className="col-md-5">
                            <h3>Experience in Years and Skill</h3>
                            {
                                map(applicantDetails.skillSet, (value, index) => {
                                    return <div key={index}>
                                        <label> {value.skill} : </label>
                                        <span>{value.yearOfExp + ' years' || 'N/A'} </span>
                                    </div>;
                                })
                            }
                        </section>


                    </div>

                    <div className="row">
                        <section className="col-md-5">
                            <h3>Education</h3>
                            {
                                map(applicantDetails.educationDetails, (value, index) => {
                                    return (
                                        <div key={index}>
                                            <div>
                                                <label> Education : </label>
                                                <span>{value.type || 'N/A'} </span>
                                            </div>
                                            <div>
                                                <label> Institute : </label>
                                                <span>{value.institute || 'N/A'} </span>
                                            </div>
                                            <div>
                                                <label> Area of Concentration : </label>
                                                <span>{value.concentratedArea || 'N/A'} </span>
                                            </div>
                                            <div>
                                                <label> GPA : </label>
                                                <span>{value.gpa || 'N/A'} </span>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </section>

                        <section className="col-md-5">
                            <h3>Websites and more</h3>
                            {
                                map(applicantDetails.links, (value, index) => {
                                    return <div key={index}>
                                        <label> {value.websiteType} : </label>
                                        <a href={value.link} target="blank">{value.link || 'N/A'} </a>
                                    </div>;
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
        getApplicantDetails: () => {
            dispatch(getApplicantDetails());
        }
    };
}

export default withRouter(
    connect(mapStatetoProps, mapDispatchtoProps)(ApplicantDetails)
);
