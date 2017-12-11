import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getApplicantList } from '../actions';
import { GridView } from '../../GridView';
import { withRouter } from 'react-router-dom';
import { Filters } from 'react-data-grid-addons';
import qs from 'query-string';
import history from '../../_app/history';
import { LinkFormatter } from '../../GridView/components/LinkFormatter';

const { SingleSelectFilter } = Filters;

export class ApplicantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: this.getGridColumns(props)
        };

        this.getGridColumns = this.getGridColumns.bind(this);
    }

    componentWillMount() {
        const { location } = history;

        this.props.getApplicantList();
    }


    getGridColumns() {
        return [
            {
                key: 'ApplicantID',
                name: 'Applicant ID',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true,
                formatter: (
                    <LinkFormatter
                        pathValue="ApplicantID"
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
                key: 'phoneNumber',
                name: 'Contact Number',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true
            },
            {
                key: 'gender',
                name: 'Gender',
                filterable: true,
                filterRenderer: SingleSelectFilter,
                sortable: true
            }
        ];
    }

    render() {
        const { applicantList } = this.props;
        const { columns } = this.state;

        return (
            <div>
                <Helmet>
                    <title>Applicant List</title>
                </Helmet>

                <GridView
                    data={applicantList}
                    columns={columns}
                />
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        applicantList: state.applicantList.applicantList
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        getApplicantList: () => {
            dispatch(getApplicantList());
        }
    };
}

export default withRouter(
    connect(mapStatetoProps, mapDispatchtoProps)(ApplicantList)
);
