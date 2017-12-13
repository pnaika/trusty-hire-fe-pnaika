import { ADD_TOAST_MESSAGE, DELETE_TOAST_MESSAGE } from '../_app/actionTypes';
import { get, isFunction, isEmpty } from 'lodash';

export function setToasterMessage(toastMessage) {
    return (dispatch) => {
        dispatch(addToasterMessage(toastMessage));
        // setTimeout(() => {
        //     dispatch(deleteToastMessage());
        // }, 5000);
    };
}

export function addToasterMessage(response) {
    return (dispatch) => {
        const status = get(response, 'status');
        const statusText = get(
            response,
            'statusText',
            get(response, 'error', '')
        );
        let text = get(response, 'customText', status + ' - ' + statusText);
        if (status >= 200 && status < 300) {
            dispatch(displayToastMessage(text, 'success'));
        } else if (
            isEmpty(response.customText) &&
            isFunction(get(response, 'json'))
        ) {
            return response.json().then((val) => {
                text = `${status} - ${val.message}`;
                dispatch(displayToastMessage(text, 'error'));
            });
        } else {
            dispatch(displayToastMessage(text, 'error'));
        }
    };
}

export function displayToastMessage(text, type) {
    return {
        type: ADD_TOAST_MESSAGE,
        payload: {
            text,
            type
        }
    };
}

export function deleteToastMessage(index = -1) {
    return {
        type: DELETE_TOAST_MESSAGE,
        payload: {
            index
        }
    };
}
