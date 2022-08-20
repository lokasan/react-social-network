import {connect} from "react-redux";
import {getUsers, IUser, UserOne, subscribeUserCT, unsubscribeUserCT} from "../../store/reducers/usersReducer";
import React from "react";
import {compose} from "redux";

// @ts-ignore
const Users = React.lazy(() => import("./Users"))

interface UsersPageState {
    usersPage: IUser
}

const mapStateToProps = (state: UsersPageState) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    usersAwait: state.usersPage.usersAwait,
})

const clearUsers = () => ({type: "CLEAR_USERS"})
const incPageCount = () => ({type: "INC_PAGE_COUNT"})
const defaultPage = () => ({type: "DEFAULT_PAGE"})

const mapDispatchToProps = {
    clearUsers,
    incPageCount,
    defaultPage,
    subscribeUserCT,
    unsubscribeUserCT,
    getUsers
}

interface UsersProps {
    users: UserOne[],
    getUsers: (pageSize: number, page: number) => void,
    clearUsers: () => void,
    incPageCount: () => void,
    defaultPage: () => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    subscribeUserCT: (id: number) => void,
    unsubscribeUserCT: (id: number) => void,
    usersAwait: Array<number>
}


type MyState = {}

export class UsersComponent extends React.Component<UsersProps, MyState> {
    constructor(props: any) {
        super(props)
    }

    setUsers = (page = 1) => {
       this.props.getUsers(this.props.pageSize, page)
    }

    clearUsers() {
        this.props.clearUsers()
    }

    defaultPage() {
        this.props.defaultPage()
    }

    incPageCount = () => {
        this.props.incPageCount()
        this.setUsers(this.props.currentPage + 1)

    }

    componentDidMount() {
        this.setUsers()
    }

    componentWillUnmount() {
        this.clearUsers()
        this.defaultPage()
    }

    render() {
        return <React.Suspense fallback={<div>Loading...</div>}><Users
            users={this.props.users}
            subscribe={this.props.subscribeUserCT}
            unsubscribe={this.props.unsubscribeUserCT}
            currentPage={this.props.currentPage}
            incPageCount={this.incPageCount}
            usersAwait={this.props.usersAwait}
        />
        </React.Suspense>
    }
}

export const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersComponent)
