import { combineReducers } from 'redux';

import { reducer as applicantList } from '../ApplicantList';
import { reducer as applicantDetails } from '../ApplicantDetails';
import { reducer as formReducer } from 'redux-form';
import { reducer as breadcrumbs } from '../Breadcrumbs';
import { reducer as toastMessages } from '../Toaster';
import { reducer as loginDetails } from '../TrustyHireHomePage';

export default combineReducers({
    applicantList,
    applicantDetails,
    breadcrumbs,
    toastMessages,
    loginDetails,
    form: formReducer
});
