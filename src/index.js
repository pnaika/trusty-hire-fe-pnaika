// styles
import './_app/styles/index.scss';

// dependencies
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// routes
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './_app/history';

// store
import store from './_app/store';

//components
import {TrustyHireHomePage} from './TrustyHireHomePage';
import {ApplicantList} from './ApplicantList';
import {ApplicantDetails} from './ApplicantDetails';
import {AddApplicantDetails} from './AddApplicantDetails';
import {AuthenticatedRoutesWrapper} from './Auth/components/AuthenticatedRoutesWrapper';
import {NewUser} from './NewUser';
import {Main} from './Main/components/Main';
import {MuiThemeProvider} from "material-ui";

const App = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <Router history={history}>
                    <Switch>
                        <Route exact
                               strict
                               path="/"
                               component={TrustyHireHomePage}
                        />
                        <Route exact
                               strict
                               path="/new-user"
                               component={NewUser}
                        />
                        <AuthenticatedRoutesWrapper shellComponent={Main}>
                            <Switch>
                                <Route exact
                                       strict
                                       path="/applicant-list"
                                       component={ApplicantList}
                                />
                                <Route path="/applicant-details"
                                       component={ApplicantDetails}
                                />
                                <Route exact
                                       strict
                                       path="/new-applicant"
                                       component={AddApplicantDetails}
                                />
                            </Switch>
                        </AuthenticatedRoutesWrapper>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
export const htmlContainer = document.querySelector('#app');

if (process.env.NODE_ENV !== 'development') {
    render(<App/>, htmlContainer);
}
