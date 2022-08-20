import React from "react"

import {connect} from "react-redux"
import {Navbar} from "./Navbar";
import {getAuth, logout, setAuthenticate} from "../../store/reducers/navbarReducer";

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

const mapDispatchToProps = {
    getAuth,
    logout,
    setAuthenticate
}

export class NavbarComponent extends React.Component {
    constructor(props: any) {
        super(props)
    }

    getAuth = () => {
        // @ts-ignore
        console.log(this.props.isAuth);
        // @ts-ignore
        this.props.getAuth()
    }

    componentDidMount() {
        this.getAuth()
    }

    logout = () => {
        // @ts-ignore
        this.props.logout()
    }

    render() {
        return <Navbar {...this.props}/>
    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)