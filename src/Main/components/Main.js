import './main.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Header } from '../../Header';
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
    return (
        <div>
            <Helmet>
                <title>Chain Smokers</title>
                <meta name="description" content="Chain Smokers" />
            </Helmet>
            <Header />
            <div className="row">
                <div className="col-xs-12 main-content">
                    <div className="main-content-page">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
