import React from 'react'
import {Profile} from "./Profile";
import {addPost} from "../../store/reducers/profileReducer";
import {State} from "../../store/store";
import {connect} from "react-redux";


const mapStateToProps = (state: State) => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPost: (post: string) => {
            dispatch(addPost(post))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)