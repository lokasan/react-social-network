import {IAction, ProfilePage} from "../store";

const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const DELETE_POST = "DELETE_POST"


const initialState = {
    posts: [{id: 1, text: 'Hello!'}, {id: 2, text: 'How are you?'}],
}

export const profileReducer = (state: ProfilePage = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = {id: 5, text: action.payload}

            return {
                ...state,
                posts: [...state.posts, newPostText],
                newPostText: ''
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.payload}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => !(post.id == action.payload))
            }
        }
        default: return state
    }
}

export const updateNewPostText = (text: string) => ({type: UPDATE_POST, payload: text})

export const addPost = (post: string) => ({type: ADD_POST, payload: post})

export const deletePost = (id: number) => ({type: DELETE_POST, payload: id})