import { combineReducers } from 'redux';

import { reducer as applicantList } from '../ApplicantList';
import { reducer as applicantDetails } from '../ApplicantDetails';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    applicantList,
    applicantDetails,
    form: formReducer
});
