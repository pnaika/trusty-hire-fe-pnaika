import { isFinite, isNumber, set, forOwn, startCase, camelCase } from 'lodash';

/**
 * Check the response status and return
 * response or throw error
 * @param response
 * @returns {*} response or throw error
 */
export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        // if api sends back failure status code,
        // throws response and treated as error in the catch block
        throw response;
    }
}

/**
 * Return json parsed response
 * @param response
 * @returns {*} json
 */
export function parseJSON(response) {
    return response.json();
}

export function transformFormEncoded(obj) {
    const result = [];
    forOwn(obj, (val, key) => {
        result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    });
    return result.join('&');
}

export function handleInputOnChange(key) {
    return function (e) {
        var state = {};
        set(state, key, e.target.value);
        this.setState(state);
    };
}

export function getNumber(numString) {
    const num = parseFloat(numString);

    if (isNumber(num) && isFinite(num)) {
        return num;
    } else {
        return 0;
    }
}

export function titleCase(someString) {
    return startCase(camelCase(someString));
}
