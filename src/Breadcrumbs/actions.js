import { SET_BREADCRUMBS } from '../_app/actionTypes';

export function setBreadcrumbs(breadcrumbs) {
    return {
        type: SET_BREADCRUMBS,
        payload: { breadcrumbs }
    };
}
