export const SKILLSET_FIELD_VALUES = {
    label: 'Skill Set',
    repeatTimes:  50,
    keyValue: [
        {
            key: 'skills',
            hintText: 'Enter your Skill - Example, Java',
            floatingLabelText: 'Skills'
        },
        {
            key: 'experience',
            hintText: 'Enter your Experience in Years - Example, 0.9',
            floatingLabelText: 'Experience'
        }
    ]
};

export const EXPERIENCE_FIELD_VALUES = {
    label: 'Experience',
    repeatTimes:  20,
    keyValue: [
        {
            key: 'company',
            hintText: 'With company did you work for?',
            floatingLabelText: 'Company'
        },
        {
            key: 'companyWebsite',
            hintText: 'Any website to refer?',
            floatingLabelText: 'Company Website'
        },
        {
            key: 'workingPeriod.from',
            hintText: 'When did you work for the above company?',
            componentType: 'DateTime',
            floatingLabelText: 'From'
        },
        {
            key: 'workingPeriod.till',
            hintText: 'Till when did you work for the above company?',
            componentType: 'DateTime',
            format: 'YYYY-MM-DD',
            floatingLabelText: 'Till'
        },
        {
            key: 'experience',
            hintText: 'Enter your Experience Details',
            floatingLabelText: 'Experience',
            multiLine: true,
            rows: 2
        }
    ]
};

export const EDUCATION_FIELD_VALUES = {
    label: 'Education Details',
    repeatTimes:  10,
    keyValue: [
        {
            key: 'institute',
            hintText: 'With company did you work for?',
            floatingLabelText: 'Institute'
        },
        {
            key: 'instituteWebsite',
            hintText: 'Any website to refer?',
            floatingLabelText: 'Institute Website'
        },
        {
            key: 'type',
            hintText: 'Masters or Bachelors',
            floatingLabelText: 'Type'
        },
        {
            key: 'concentratedArea',
            hintText: 'Concentrated Area - Example: Computer Programming',
            floatingLabelText: 'Concentrated Area '
        },
        {
            key: 'gpa',
            hintText: 'GPA',
            floatingLabelText: 'GPA'
        },
        {
            key: 'yearOfGraduation',
            hintText: 'When did you Graduate?',
            componentType: 'DateTime',
            format: 'YYYY-MM-DD',
            floatingLabelText: 'Graduation Date'
        },
        {
            key: 'details',
            hintText: 'Enter your Experience Details',
            floatingLabelText: 'Experience',
            multiLine: true,
            rows: 2
        }
    ]
};

export const WEBSITES_FIELD_VALUES = {
    label: 'Website',
    repeatTimes:  1,
    keyValue: [
        {
            key: 'github',
            hintText: 'Github link',
            floatingLabelText: 'Github link'
        },
        {
            key: 'linkedIn',
            hintText: 'LinkedIn link',
            floatingLabelText: 'LinkedIn link'
        },
        {
            key: 'personalWebsite',
            hintText: 'Personal Website',
            floatingLabelText: 'Personal Website'
        },
        {
            key: 'others',
            hintText: 'Any other Website',
            floatingLabelText: 'Any other Website'
        },
        {
            key: 'others2',
            hintText: 'Any other Website',
            floatingLabelText: 'Any other Website'
        }
    ]
};