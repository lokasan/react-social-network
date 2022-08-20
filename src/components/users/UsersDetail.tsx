import React from 'react'
import {IUserDetailState} from "../../store/reducers/userDetailReducer";


export const UsersDetail = (props: IUserDetailState) => {
    return <div
        className="content rounded-2xl shadow-2xl"
        style={{background: "linear-gradient(90deg, #fab397, #f6edb2)"}}>
        <div>{props.user.userId}</div>
        <div>{props.user.lookingForAJobDescription}</div>
        <div>{props.user.lookingForAJob}</div>
        <div>{props.user.contacts.mainLink}</div>
        <div>{props.user.contacts.youtube}</div>
        <div>{props.user.contacts.website}</div>
        <div>{props.user.contacts.twitter}</div>
        <div>{props.user.contacts.vk}</div>
        <div>{props.user.contacts.github}</div>
        <div>{props.user.fullName}</div>
        <img src={`${props.user.photos.large}`}/>
    </div>

}