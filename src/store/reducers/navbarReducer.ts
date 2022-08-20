import {authAPI} from "../../api/api";

const LOGOUT = '/navbar/LOGOUT'
const SET_AUTHENTICATION = '/navbar/SET_AUTHENTICATION'
const AUTHENTICATION = '/navbar/AUTHENTICATION'

const initialState = {
    isAuth: false,
    login: null
}

interface IAuth {
    isAuth: boolean
}

interface Action {
    type: string,
    payload: any
}

export const authReducer = (state: IAuth = initialState, action: Action) => {
    switch (action.type) {
        case AUTHENTICATION: {
            console.log(action.payload)
            return {...state, isAuth: Boolean(action.payload), login: action.payload}
        }
        case LOGOUT: return {...state, isAuth: false, login: null}
        case SET_AUTHENTICATION: return {...state, isAuth: true, login: action.payload}
        default:
            return state
    }
}

const setAuth = (login: string | null) => ({type: AUTHENTICATION, payload: login})
const userLogout = () => ({type: LOGOUT})
const sendAuthenticationData = () => ({type:SET_AUTHENTICATION})



export const getAuth = () => {
    return async (dispatch: any) => {
        const data = await authAPI.me()
        const result = data.resultCode == 0 ? data.data.login : null
        dispatch(setAuth(result))
    }
}

export const logout = () => {
    return async (dispatch: any) => {
        await authAPI.logout()
        dispatch(userLogout())
    }
}

export const setAuthenticate = (data: any) => {
    return async (dispatch: any) => {
        await authAPI.auth(data)
        dispatch(sendAuthenticationData())
        dispatch(getAuth())
    }
}