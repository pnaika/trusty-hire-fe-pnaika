import {
    APPLICANT_LIST
} from '../_app/actionTypes';

const initialState = {
    applicantList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case APPLICANT_LIST:
            return {
                ...state,
                requests: action.payload.requests
            };
        default:
            return state;
    }
}
