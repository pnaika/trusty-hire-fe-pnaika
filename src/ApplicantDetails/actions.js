import 'whatwg-fetch';
import {
    APPLICANT_DETAILS
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';
import { ApplicantDetailsMockData } from '../mockData/ApplicantDetailsMockData';
import {actions as toastActions} from "../Toaster";

export function setApplicantDetails(applicantDetails) {
    return {
        type: APPLICANT_DETAILS,
        payload: { applicantDetails }
    };
}

export function getApplicantDetails() {
    const res = {
        status: 200,
        customText: 'Applicant data is saved successfully !'
    };
    return (dispatch) => {
        dispatch(toastActions.setToasterMessage(res));
        dispatch(setApplicantDetails(ApplicantDetailsMockData));
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
