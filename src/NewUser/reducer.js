import {
    LOGIN_DETAILS
} from '../_app/actionTypes';

const initialState = {
    loginDetails: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload.loginDetails
            };
        default:
            return state;
    }
}
