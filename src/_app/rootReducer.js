import { combineReducers } from 'redux';

import { reducer as applicantList } from '../ApplicantList';
import { reducer as applicantDetails } from '../ApplicantDetails';

export default combineReducers({
    applicantList,
    applicantDetails
});
