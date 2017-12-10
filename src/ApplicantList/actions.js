import 'whatwg-fetch';
import {
    APPLICANT_LIST
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';
import { ApplicantListMockData } from '../mockData/ApplicantListMockData';

export function setApplicantList(applicantList) {
    return {
        type: APPLICANT_LIST,
        payload: { applicantList }
    };
}

export function getApplicantList() {
    console.log('ApplicantListMockData :', ApplicantListMockData)
    return (dispatch) => {
        dispatch(setApplicantList(ApplicantListMockData));
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
