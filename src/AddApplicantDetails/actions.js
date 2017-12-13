import 'whatwg-fetch';
import {
    SET_APPLICANT_DETAILS
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';
import history from '../_app/history';
import { actions as toastActions } from '../Toaster';

export function addApplicantDetails(newApplicantDetails) {
    return {
        type: SET_APPLICANT_DETAILS,
        payload: { newApplicantDetails }
    };
}

export function addNewApplicantDetails(newApplicantDetails) {
    const res = {
        customText: 'Applicant data is saved successfully !'
    };

    return (dispatch) => {
        dispatch(toastActions.setToasterMessage(res));
        history.push('./applicant-list');
        dispatch(addApplicantDetails(newApplicantDetails));
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
