import React from 'react'
import {Post} from "../../store/store";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileForm} from "./ProfileForm";

interface IPost {
    posts: Post[],
    addNewPost: (post: string) => void,
}


export const Profile = ({posts, addNewPost}: IPost) => {
    return <div className="content rounded-2xl shadow-2xl" style={{background: "linear-gradient(90deg, #fab397, #f6edb2)"}}>
        <ProfileStatus/>
        {posts.map(({id, text}) => <p key={String(id)}>{text}</p>)}
        <ProfileForm addNewPost={addNewPost}/>
    </div>
}