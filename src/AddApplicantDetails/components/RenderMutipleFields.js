import React from 'react';
import { Field } from 'redux-form';
import {
    DatePicker,
    TextField
} from 'redux-form-material-ui';

const RenderMultipleFields = ({fields, meta: {error, submitFailed}, label, keyValues, repeatTimes}) => {

    const getComponent = (componentType) => {
        if (componentType === 'DateTime') {
            return DatePicker;
        } else
            return TextField;
    };

    return (
        <div>
            {fields.map((member, index) => (
                <div key={index} className="experience-card">
                    <button
                        type="button"
                        title={`Remove ${label}`}
                        className="btn btn-danger pull-right"
                        onClick={() => fields.remove(index)}
                    >X
                    </button>
                    <h4>{label} #{index + 1}</h4>

                    {
                        keyValues.map((fieldValues) => {
                            return <Field
                                className={fieldValues.multiLine ? 'field-text-area' : ''}
                                name={`${member}.${fieldValues.key}`}
                                component={getComponent(fieldValues.componentType)}
                                hintText={fieldValues.hintText}
                                floatingLabelText={fieldValues.floatingLabelText}
                                multiLine={fieldValues.multiLine || false}
                                rows={fieldValues.rows}
                                format={fieldValues.component === 'DatePicker' ? null : ''}
                            />;
                        })
                    }
                </div>
            ))}
            <div className="margin-top-10">
                {
                    fields.length < repeatTimes ?
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => fields.push({})}>
                                {fields.length ? `Add More ${label}` : `Add ${label}`}
                            </button>
                            <span className="pull-right">
                                {fields.length ? 'we would love to see more details' : ''}
                            </span>
                            {submitFailed && error && <span>{error}</span>}
                        </div> : ''
                }
            </div>
        </div>
    );
};

export default RenderMultipleFields;
