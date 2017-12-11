export const ApplicantDetailsMockData = {
    ApplicantID:'1',
    firstName:'John',
    lastName:'Deer',
    Address:{
        line1:'123 john me RD',
        line2:'apt 231',
        city:'XYZ',
        state:'IL',
        country:'US'
    },
    email:'xyz@xyz.com',
    phoneNumber:'31231231243',
    gender:'Male',
    countryOfCitizenship:'India',
    educationDetails: [{
        type: 'masters',
        institute: ' IIT chicago',
        concentratedArea: 'Software Development',
        gpa: '3.9',
        moreDetails: '',
        yearOfGraduation: '2016'
    }],
    skillSet:[
        {
            skill:'Java',
            yearOfExp:'3'
        },
        {
            skill:'JS',
            yearOfExp:'5'
        },
        {
            skill:'HTML5',
            yearOfExp:'5'
        },
        {
            skill:'CSS3',
            yearOfExp:'5'
        }
    ],
    married:'No',
    languages:[
        'Kannada',
        'English',
        'Hindi'
    ],
    certificates:[
        {
            name:'A+',
            title:'Hardware and Networking',
            description:'etc etc etc etc',
            year: '2005'
        }
    ],
    visaStatus:'ABC',
    visaValidity:'20/12/2019',
    interviewDetails:[
        {
            dateOfInterview:'20/12/2017',
            interviewFeedback:'Good etc'
        }
    ],
    availableDate:'12/01/2018',
    applicantLocation:'Chicago',
    salaryDetails: [
        {
            salaryType: 'current',
            salary:'130000',
            currency: 'USD'
        },
        {
            salaryType: 'expected',
            salary:'150000',
            currency: 'USD'
        }
    ],
    links:[
        {
            websiteType:'github',
            link:'http://www.github.com'
        },
        {
            websiteType:'linkedIn',
            link:'http://www.linkedIn.com'
        }
    ],
    currentDesignation:'Senior Software Engineer'
};