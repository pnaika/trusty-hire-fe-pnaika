import 'whatwg-fetch';
import {
    APPLICANT_DETAILS
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';
import { ApplicantDetailsMockData } from '../mockData/ApplicantDetailsMockData';

export function setApplicantDetails(applicantDetails) {
    return {
        type: APPLICANT_DETAILS,
        payload: { applicantDetails }
    };
}

export function getApplicantDetails() {
    return (dispatch) => {
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
