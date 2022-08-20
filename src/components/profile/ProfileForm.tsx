import React from 'react'
import {Field, Form} from 'react-final-form'


export const ProfileForm = (props: any) => {
    return (
        <Form
            onSubmit={value => props.addNewPost(value.newPost)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="newPost" component="textarea" placeholder="new comment"/>
                    <button type="submit">Create</button>
                    </div>
                </form>
            )}
        />
    )
}