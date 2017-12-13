import { cloneDeep } from 'lodash';
import {
    ADD_TOAST_MESSAGE,
    DELETE_TOAST_MESSAGE
} from '../_app/actionTypes';

const initialState = {
    toastMessages: []
};

export default function (state = initialState, action) {
    let newState;
    switch (action.type) {
        case ADD_TOAST_MESSAGE:
            newState = cloneDeep(state);
            action.payload.index = new Date().valueOf();

            newState.toastMessages.push(action.payload);

            return {
                ...newState
            };
        case DELETE_TOAST_MESSAGE:
            newState = cloneDeep(state);

            if(action.payload.index === -1) {
                newState.toastMessages.shift();
            } else {
                newState.toastMessages = newState.toastMessages.filter((messages) => {
                    return messages.index !== action.payload.index;
                });
            }

            return {
                ...newState
            };
        default:
            return state;
    }
}
