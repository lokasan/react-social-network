import React from 'react'
import {Link, LinkProps, useMatch, useResolvedPath} from 'react-router-dom'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return <nav className="navbar rounded-2xl shadow-2xl p-3"
                style={{background: "linear-gradient(90deg, #faf0cd, #fab397)"}}>
        <CustomLink to="/profile">Профиль</CustomLink>
        <br/>
        <CustomLink to="/dialogues">Сообщения</CustomLink>
        <br/>
        <CustomLink to="/news">Новости</CustomLink>
        <br/>
        <CustomLink to="/music">Музыка</CustomLink>
        <br/>
        <CustomLink to="/users">Поиск</CustomLink>
        <br/>
        <CustomLink to="/settings">Настройки</CustomLink>
        <br/>
    </nav>
}

function CustomLink({children, to, ...props}: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});
    return (
        <Link className={match ? styles.linkActive : styles.link} to={to} {...props}>
            {children}
        </Link>
    )
}
