import {Field, Form} from "react-final-form";
import React from "react";
import {FieldHOC} from "./components/FieldHOC";
import {required} from "./formValidator/formValidator";

export const AuthForm = (props: any) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <FieldHOC name="email" validate={required} placeholder="login/email" type="text"/>
                    </div>
                    <div className="mb-5">
                        <FieldHOC name="password" validate={required} placeholder="password" type="password"/>
                    </div>
                    <div>
                        <Field name="rememberMe" type="checkbox">
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="checkbox"/>
                                </div>
                            )}
                        </Field>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Authorize</button>
                </form>
            )}
        />
    )
}