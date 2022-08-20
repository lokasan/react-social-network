import React from 'react'

import ReactDOM from 'react-dom/client'
import {getAuth} from "./store/reducers/navbarReducer";
import {NavbarContainer} from "./components/navbar/NavbarConrainer";
import {Sidebar} from "./components/sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {UsersDetailContainer} from "./components/users/UsersDetailContainer";
import {DialoguesContainer} from "./components/dialogues/DialoguesContainer";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {UsersContainer} from "./components/users/UsersContainer";
import {Settings} from "./components/settings/Settings";
import {Auth} from "./components/auth/Auth";
import {connect, Provider} from "react-redux";
import Store from "./store/reduxStore";


const mapDispatchToProps = {
    getAuth
}

interface IProps {
    getAuth: () => any
}

type MyState = {}

class App extends React.Component<IProps, MyState> {

    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <div className="app">
                <NavbarContainer/>
                <Sidebar/>
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<UsersDetailContainer/>}/>
                    <Route path="/dialogues" element={<DialoguesContainer/>}/>
                    <Route path="/dialogues/:id" element={<DialoguesContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
            </div>
        );
    }
}

let AppContainer = connect(null, mapDispatchToProps)(App);

const SocialNetwork = (props: any) => {
    return <BrowserRouter>
        <Provider store={Store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetwork