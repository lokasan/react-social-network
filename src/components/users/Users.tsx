import React from 'react'
import {UserOne} from "../../store/reducers/usersReducer";
import {Link} from "react-router-dom";

interface UsersProps {
    users: UserOne[],
    incPageCount: () => void,
    currentPage: number,
    usersAwait: Array<number>,
    subscribe: (id: number) => void,
    unsubscribe: (id: number) => void,
}


const Users = (props: UsersProps) => {
    return <div className="content rounded-2xl shadow-2xl"
                style={{background: "linear-gradient(90deg, #fab397, #f6edb2)"}}>
        {props.users.map((user) => <div key={user.id.toString()}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <img src={user.photos.small} alt=""/>
            <button disabled={props.usersAwait.some(id => id == user.id)} onClick={() => {
                user.followed ? props.unsubscribe(user.id) : props.subscribe(user.id)
            }}>{user.followed ? "unsubscribe" : "subscribe"}</button>
        </div>)}
        <div onClick={props.incPageCount} className="mt-5 pagination">
            {props.currentPage}
        </div>
    </div>
}

export default Users;