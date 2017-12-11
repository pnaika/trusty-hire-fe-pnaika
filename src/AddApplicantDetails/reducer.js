import { cloneDeep } from 'lodash';
import {
    SET_APPLICANT_DETAILS
} from '../_app/actionTypes';

export const initialState = {
    newApplicantDetails: {
        firstName:'',
        lastName:'',
        Address:{
            line1:'',
            line2:'',
            city:'',
            state:'',
            country:''
        },
        email:'',
        phoneNumber:'',
        gender:'',
        countryOfCitizenship:'',
        educationDetails: [],
        skillSet:[],
        married:'',
        languages:[],
        certificates:[],
        visaStatus:'',
        visaValidity:'',
        interviewDetails:[],
        availableDate:'',
        applicantLocation:'',
        salaryDetails: [],
        links:[],
        currentDesignation:''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_APPLICANT_DETAILS:
            return {
                ...state,
                newApplicantDetails: action.payload.newApplicantDetails
            };
        default:
            return state;
    }
}
