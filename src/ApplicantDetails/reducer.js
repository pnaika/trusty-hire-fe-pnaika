import {
    APPLICANT_DETAILS
} from '../_app/actionTypes';

const initialState = {
    applicantDetails: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case APPLICANT_DETAILS:
            return {
                ...state,
                applicantDetails: action.payload.applicantDetails
            };
        default:
            return state;
    }
}
