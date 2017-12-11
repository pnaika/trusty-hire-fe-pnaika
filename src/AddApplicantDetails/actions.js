import 'whatwg-fetch';
import {
    APPLICANT_DETAILS
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';

export function addApplicantDetails(newApplicantDetails) {
    return {
        type: APPLICANT_DETAILS,
        payload: { newApplicantDetails }
    };
}

export function addNewApplicantDetails(newApplicantDetails) {
    return (dispatch) => {
        dispatch(addApplicantDetails(newApplicantDetails));
    };
    // // const url = `${ipAddress}/api/v1/blockchain/sno/${serialNumber}/assembly/${assemblerId}`;
    //
    // return (dispatch) => {
    //     return fetch(url)
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then((res) => {
    //             dispatch(setPartsDataList(res));
    //         })
    //         .catch((err) => {
    //
    //         })
    // };
}
