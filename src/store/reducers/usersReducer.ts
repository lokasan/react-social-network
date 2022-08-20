import {userAPI} from "../../api/api";

const initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    usersAwait: []
}

interface Action {
    type: string,
    payload: any
}

export interface UserOne {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    photos: {large: string, small: string}
}

export interface IUser {
    users: UserOne[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    usersAwait: Array<number>,

}

export const usersReducer = (state: IUser=initialState, action: Action) => {
    switch (action.type) {
        case "CHANGE_FOLLOW": return {
            ...state,
            users: state.users.map((user) => {
                if (user.id == action.payload)  {
                    return {...user, followed: !user.followed}
                }
                return user
            })
        }
        case "SET_USERS": return {...state, users: [...state.users, ...action.payload]}
        case "CLEAR_USERS": return {...state, users: []}
        case "SET_TOTAL_USERS_COUNT": return {...state, totalUsersCount: action.payload}
        case "INC_PAGE_COUNT": return {...state, currentPage: ++state.currentPage }
        case "DEFAULT_PAGE": return {...state, currentPage: 1}
        case "SUBSCRIBE_USER": return {...state, usersAwait: [...state.usersAwait, action.payload]}
        case "UNSUBSCRIBE_USER": return {...state, usersAwait: state.usersAwait.filter(id => id != action.payload)}
        default: return state
    }
}


const setUsers = (users: []) => ({type: "SET_USERS", payload: users})
const setTotalUsersCount = (totalCountUsers: number) => ({type: "SET_TOTAL_USERS_COUNT", payload: totalCountUsers})

const subscribeUser = (id: number) => ({type: "SUBSCRIBE_USER", payload: id})
const unsubscribeUser = (id: number) => ({type: "UNSUBSCRIBE_USER", payload: id})
const onClick = (id: number) => ({type: "CHANGE_FOLLOW", payload: id})


export const getUsers = (pageSize: number, page: number) => {
    return async (dispatch: any) => {
        const data = await userAPI.setUsers(pageSize, page)
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
    }
}

export const subscribeUserCT = (id: number) => {
    return async (dispatch: any) => {
        dispatch(subscribeUser(id))
        await userAPI.subscribe(id)
        dispatch(onClick(id))
        dispatch(unsubscribeUser(id))
    }
}

export const unsubscribeUserCT = (id: number) => {
    return async (dispatch: any) => {
        dispatch(subscribeUser(id))
        await userAPI.unsubscribe(id)
        dispatch(onClick(id))
        dispatch(unsubscribeUser(id))
    }
}