import {profileReducer} from "./reducers/profileReducer";

export type Post = {id: number, text: string}
export type User = {id: number, name: string, messages: [{id: number, text: string, from: string,}]}
type newPostText = string

export interface ProfilePage {
    posts: Post[],
}

export type State = {
    profilePage: ProfilePage,
    dialoguesPage: {
        users: User[],
        newMessageBody: string,
    },
}

export interface IStore {
    _state: State,
    getState(): State,
    subscribe(observer: any): void,
    _callSubscriber(state: State): void,
    dispatch(action: IAction): void
}

export interface IAction {
    type: string,
    payload: any
}




export const Store: IStore = {
    _state: {
        profilePage: {
            posts: [{id: 1, text: 'Hello!'}, {id: 2, text: 'How are you?'}],
        },
        dialoguesPage: {
            users: [{id: 1, name: 'Boris', messages: [{id: 1, text: 'hello', from: 'me',}]}],
            newMessageBody: '',
        },
    },
    _callSubscriber(state: State) {
        console.log('State changed')
    },
    getState(): State {
        return this._state
    },
    subscribe(observer): void {
        this._callSubscriber = observer
    },
    dispatch(action: IAction) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    }
}