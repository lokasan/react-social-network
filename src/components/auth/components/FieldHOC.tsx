import {Field} from "react-final-form";
import React from "react";

export const FieldHOC = ({children, name, validate, placeholder, type, ...props}: any) => {
    return (
        <Field name={name} validate={validate}>
            {({ input, meta }) => (
                <div>
                    <input {...input} type={type} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}