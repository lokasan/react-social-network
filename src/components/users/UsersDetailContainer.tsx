import {connect} from "react-redux";
import {UsersDetail} from "./UsersDetail";
import {IUserDetail, IUserDetailState} from "../../store/reducers/userDetailReducer";
import React from "react";
import {useParams} from 'react-router-dom'
import {userAPI} from "../../api/api";


interface UserState {
    userDetail: IUserDetailState
}

interface UserAndParams {
    user: IUserDetail,
    params: {
        userId: string,
    },
    setUserDetail: (user: IUserDetail) => void,
}



const withRouter = (WrappedComponent: any) => (props: any) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

const mapStateToProps = (state: UserState) => ({
    user: state.userDetail.user
})

const mapDispatchToProps = (dispatch: any) => ({
    setUserDetail(user: IUserDetail) {
        return dispatch({type: "SET_USER_PROFILE", payload: user})
    }
})

class UsersDetailComponent extends React.Component<UserAndParams, {}> {
    constructor(props: any) {
        super(props)
    }

    setUserDetail = (id: number) => {
        userAPI.getUserDetail(id).then(data => this.props.setUserDetail(data))
    }

    componentDidMount() {
        this.setUserDetail(+this.props.params.userId)
    }

    render() {
        return <UsersDetail user={this.props.user}/>
    }
}

const UsersDetailWithRouter = withRouter(UsersDetailComponent)

export const UsersDetailContainer = connect(mapStateToProps, mapDispatchToProps)(UsersDetailWithRouter)