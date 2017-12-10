import 'whatwg-fetch';
import {
    APPLICANT_LIST
} from '../_app/actionTypes';
import { checkStatus, parseJSON } from '../_app/utils';
import { ApplicantListMockData } from '../mockData/ApplicantListMockData';

export function setApplicantList(requests) {
    return {
        type: APPLICANT_LIST,
        payload: { requests }
    };
}

export function getApplicantList() {

    return (dispatch) => {
        dispatch(setApplicantList(ApplicantListMockData))
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
