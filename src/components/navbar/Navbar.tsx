import React from 'react'
import {Logo} from "../Logo";
import {Link} from "react-router-dom";

export const Navbar = (props: any) => {

    console.log(props)

    return <header className="header rounded-3xl drop-shadow-lg"
                   style={{backgroundColor: '#fffff0', alignSelf: 'self-end'}}>
        <Logo/>

        {props.login ? <div>
            <div>{props.login}</div>
            <button onClick={props.logout}>Exit</button>
        </div> : <Link to="/auth">Войти</Link>}
    </header>
}