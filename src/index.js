// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// routes
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './_app/history';

// store
import store from './_app/store';

//components
import { TrustyHireHomePage } from './TrustyHireHomePage';
import { ApplicantList } from './ApplicantList';
import {AuthenticatedRoutesWrapper} from './Auth/AuthenticatedRoutesWrapper';
import {Main} from './Main/components/Main';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                <Route exact
                       strict
                       path="/"
                       component={TrustyHireHomePage}
                />
                <AuthenticatedRoutesWrapper shellComponent={Main}>
                <Switch>


                    <Route exact
                           strict
                           path="/applicant-list"
                           component={ApplicantList}
                    />

                </Switch>
                </AuthenticatedRoutesWrapper>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
export const htmlContainer = document.querySelector('#app');

if (process.env.NODE_ENV !== 'development') {
    render(<App/>, htmlContainer);
}
