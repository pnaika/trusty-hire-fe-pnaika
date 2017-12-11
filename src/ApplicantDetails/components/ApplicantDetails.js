import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getApplicantDetails } from '../actions';
import { GridView } from '../../GridView';
import { withRouter } from 'react-router-dom';
import { Filters } from 'react-data-grid-addons';
import qs from 'query-string';
import history from '../../_app/history';
import { LinkFormatter } from '../../GridView/components/LinkFormatter';

const { SingleSelectFilter } = Filters;

export class ApplicantDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { location } = history;

        this.props.getApplicantDetails();
    }

    render() {

        const { applicantDetails } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Applicant Details</title>
                </Helmet>

                <h1>Applicant Details</h1>
                <div className="row">
                    <section className="col-md-6">
                        <h3>Personal</h3>
                        <div>
                            <label>Applicant Name : </label>
                            <span>{ applicantDetails.firstName || '' } { applicantDetails.lastName || '' }</span>
                        </div>
                    </section>

                    <section className="col-md-6">
                        <h3>Education</h3>
                    </section>
                </div>

                <div className="row">
                    <section className="col-md-6">
                        <h3>Experience and Skill</h3>
                    </section>

                    <section className="col-md-6">
                        <h3>Websites and more</h3>
                    </section>
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
