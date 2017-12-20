import { SET_BREADCRUMBS } from '../_app/actionTypes';

const initialState = {
    breadcrumbs: [{ label: 'Applicant List', link: '/applicant-list' }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload.breadcrumbs
            };
        default:
            return { ...state };
    }
}
