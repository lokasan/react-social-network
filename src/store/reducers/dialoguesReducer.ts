const initialState = {
    users: [{id: 1, name: 'Boris', messages: [{id: 1, text: 'hello', from: 'me',}]}],
    newMessageBody: '',
}

export const dialoguesReducer = (state: any = initialState, action: any) => {
    return state
}