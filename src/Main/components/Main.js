import './main.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Header } from '../../Header';
import { Toaster } from '../../Toaster';

export const Main = ({ children, toastMessages }) => {
    console.log('toastMessages :',toastMessages)
    return (
        <div>
            <Helmet>
                <title>Trusty Hire</title>
                <meta name="description" content="trusty-hire" />
            </Helmet>
            <Header />
            <div className="row">
                <div className="col-xs-12 main-content">
                    <Toaster toastMessages={toastMessages} />

                    <div className="main-content-page">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        toastMessages: state.toastMessages.toastMessages
    };
}

export default connect(mapStateToProps)(Main);
