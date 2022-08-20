import React from 'react'
import {User} from "./User";



interface IUser {
    dialogues: {id: number, name: string, messages: [{id: number, text: string, from: string}]}[]
}

export const UserList = ({dialogues}: IUser) => {
    return (
        <div className="userList">
            {
                dialogues.map(({id, name}) => <User name={name} id={id} key={id}/>)
            }
        </div>
    )
}
