import './applicant-list.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getApplicantList } from '../actions';
import { GridView } from '../../GridView';
import {Link, withRouter} from 'react-router-dom';
import { Filters } from 'react-data-grid-addons';
import { LinkFormatter } from '../../GridView/components/LinkFormatter';
import { setBreadcrumbs } from '../../Breadcrumbs';

const { SingleSelectFilter, AutoCompleteFilter } = Filters;

export class ApplicantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: this.getGridColumns(props)
        };

        this.getGridColumns = this.getGridColumns.bind(this);
    }

    componentWillMount() {
        this.props.setBreadcrumbs([{ label: 'Applicant List', link: '/applicant-list'}]);
        this.props.getApplicantList();
    }


    getGridColumns() {
        return [
            {
                key: 'id',
                name: 'Applicant ID',
                filterable: true,
                sortable: true,
                formatter: (
                    <LinkFormatter
                        pathValue="id"
                        path="./applicant-details"
                        search="?id="
                    />
                ),
                getRowMetaData: (data) => data
            },
            {
                key: 'firstName',
                name: 'First Name',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true
            },
            {
                key: 'lastName',
                name: 'Last Name',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true
            },
            {
                key: 'email',
                name: 'Email ID',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true
            },
            {
                key: 'contactNumber',
                name: 'Contact Number',
                filterable: true,
                sortable: true
            },
            {
                key: 'address.state',
                name: 'Applicant Location',
                filterable: true,
                filterRenderer: AutoCompleteFilter,
                sortable: true
            }
        ];
    }

    render() {
        const { applicantList } = this.props;
        const { columns } = this.state;

        return (
            <div className="applicant-list-page">
                <Helmet>
                    <title>Applicant List</title>
                </Helmet>

                <h1>Applicant List</h1>
                <Link to="./new-applicant">
                    <button className="btn btn-primary">Add New Applicant</button>
                </Link>

                <GridView
                    data={applicantList}
                    columns={columns}
                />
            </div>
        );
    }
}

ApplicantList.propTypes = {
    setBreadcrumbs: PropTypes.func.isRequired
};

function mapStatetoProps(state) {
    return {
        applicantList: state.applicantList.applicantList
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        getApplicantList: () => {
            dispatch(getApplicantList());
        },
        setBreadcrumbs: (breadcrumbs) => {
            dispatch(setBreadcrumbs(breadcrumbs));
        }
    };
}

export default withRouter(
    connect(mapStatetoProps, mapDispatchtoProps)(ApplicantList)
);
