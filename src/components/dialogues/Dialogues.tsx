import React from 'react'
import styles from './Dialogues.module.css'
import { UserList } from "./users/UserList"
import { Messages } from "./messages/Messages"
import { User } from "../../store/store";

interface IUser {
    dialogues: User[]
}




export const Dialogues = ({dialogues}: IUser) => {
    return (
        <div className={"content rounded-2xl shadow-2xl p-5" + ' ' + styles.container}
             style={{background: "linear-gradient(90deg, #fab397, #f6edb2)"}}>
            <UserList dialogues={dialogues}/>
            <Messages/>
        </div>
    )
}
