import React from 'react'
import {Link} from "react-router-dom";

interface IUser {
    name: string,
    id: number
}

export const User = ({name, id}: IUser) => {
    return (
        <div>
            <Link to={`/dialogues/${id}`}>{name}</Link>
        </div>
    )
}