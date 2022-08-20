import axios from "axios";

const axi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": '3c442c17-89cd-4586-95e0-5b5fef13deca',
    },

})

export const userAPI = {
    getUserDetail(id: number) {
        return axi.get(`/profile/${id}`).then((response) => response.data)
    },
    subscribe(id: number) {
        return axi.post(`/follow/${id}`).then(response => response.data)
    },
    unsubscribe(id: number) {
        return axi.delete(`/follow/${id}`).then(response => response.data)
    },
    setUsers(pageSize: number, page: number) {
        return  axi.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`).then(response => response.data)
    }
}

export const authAPI = {
    auth(data: any) {
        return axi.post('/auth/login', data).then(response => response.data)
    },
    me() {
        return axi.get('/auth/me').then(response => response.data)
    },
    logout() {
        return axi.delete('/auth/login').then(response => response.data)
    }
}