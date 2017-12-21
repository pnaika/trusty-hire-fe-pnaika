import 'whatwg-fetch';
import history from '../_app/history';
import { LOGIN_DETAILS } from '../_app/actionTypes';


export function addLoginDetails(loginDetails) {
    return {
        type: LOGIN_DETAILS,
        payload: { loginDetails }
    };
}

export function getLoginInformation(loginDetails) {
    return (dispatch) => {
        history.push('./applicant-list');
        console.log(loginDetails);
        dispatch(addLoginDetails(loginDetails));
    };
    // // const url = ``;
    //
    // return (dispatch) => {
    //     return fetch(url)
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then((res) => {
    //             dispatch(addApplicantDetails(res));
    //         })
    //         .catch((err) => {
    //
    //         })
    // };
}
