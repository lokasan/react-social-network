import React from 'react'
import {setAuthenticate} from "../../store/reducers/navbarReducer";
import {connect} from "react-redux";
import {AuthForm} from "./AuthForm";
import { Navigate } from 'react-router-dom'



const mapStateToProps = (state: any) => ({
    user: '',
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    onSubmit: setAuthenticate
}

export class AuthFormComponent extends React.Component {
    constructor(props: any) {
        super(props)
    }


    render() {

        return (// @ts-ignore
                this.props.isAuth
                    ? <Navigate to={'/profile'}/>
                    : <AuthForm {...this.props}/>
        )
    }
}

export const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(AuthFormComponent)

