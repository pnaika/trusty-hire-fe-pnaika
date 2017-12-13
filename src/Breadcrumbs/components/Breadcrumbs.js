import './breadcrumbs.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        breadcrumbs: state.breadcrumbs.breadcrumbs
    };
}

export const Breadcrumbs = ({ breadcrumbs }) => {
    console.log(breadcrumbs)
    return (
        <div className="breadcrumbs-container">
            <span
                className="glyphicon glyphicon-folder-open"
                aria-hidden="true"
            />
            <ol className="breadcrumb">
                {Array.isArray(breadcrumbs)
                    ? breadcrumbs.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link to={item.link}>
                                      {item.label}
                                  </Link>
                              </li>
                          );
                      })
                    : <span />}
            </ol>
        </div>
    );
};

export default connect(mapStateToProps)(Breadcrumbs);
