import 'whatwg-fetch';
import history from '../_app/history';

export function getLoginInformation() {
    return (dispatch) => {
        history.push('./applicant-list');
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
