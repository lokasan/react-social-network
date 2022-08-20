export interface IUserDetail {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    },
    photos: {
        small: string,
        large: string,
    },
}

export interface IUserDetailState {
    user: IUserDetail
}

const initialState: IUserDetailState = {
    user: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        },
    }
}

export const userDetailReducer = (state:IUserDetailState=initialState, action: any) => {
    switch (action.type) {
        case "SET_USER_PROFILE": return {...state, user: action.payload}
        default: return state
    }

}