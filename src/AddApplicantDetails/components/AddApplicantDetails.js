import './add-applicant-details.scss';

import React, { Component } from 'react';
import ApplicantInfoForm from './ApplicantInfoForm';
import {getApplicantList} from "../../ApplicantList/actions";
import {setBreadcrumbs} from "../../Breadcrumbs";
import {connect} from "react-redux";
import history from "../../_app/history";
import {addNewApplicantDetails} from "../actions";

export class AddApplicantDetails extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    componentWillMount() {
        this.props.setBreadcrumbs([ { label: 'Add new applicant', link: '/new-applicant' }]);
    }

    submit(newApplicant) {
        console.log(JSON.stringify(newApplicant))
        this.props.addNewApplicantDetails(newApplicant);
    }

    render() {
        return (
            <div className="add-applicant-details-page">
                <div className="row">
                    <span className="col-xs-2 side-nav">
                        <ul className="nav nav-pills nav-stacked">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#personal-information">
                                    Personal Details
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience-information">
                                    Experience
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education-information">
                                    Education
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#visa-information">
                                    Visa Details
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#website-information">
                                    Websites
                                </a>
                            </li>
                        </ul>
                    </span>
                    <span className="col-xs-10 pull-right">
                        <h1>ADD NEW APPLICANT</h1>
                        <ApplicantInfoForm  onSubmit={this.submit}/>
                    </span>
                </div>

            </div>
        );
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        addNewApplicantDetails: (newApplicant) => {
            dispatch(addNewApplicantDetails(newApplicant));
        },
        setBreadcrumbs: (breadcrumbs) => {
            dispatch(setBreadcrumbs(breadcrumbs));
        }
    };
}

export default connect(null, mapDispatchtoProps)(AddApplicantDetails);
