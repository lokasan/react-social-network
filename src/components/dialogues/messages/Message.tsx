import React from 'react'

interface IMessage {
    message: string
}

export const Message = ({message} : IMessage) => {
    return (
        <div>{message}</div>
    )
}