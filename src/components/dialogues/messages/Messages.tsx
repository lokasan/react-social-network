import React from 'react'
import {Message} from "./Message";

export const Messages = () => {

    return (
        <div className="messages">
            <Message message="Hello, how are you?"/>
            <Message message="What is your name?"/>
        </div>
    )
}
