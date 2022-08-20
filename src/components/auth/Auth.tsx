import React from 'react'
import styles from "../dialogues/Dialogues.module.css";
import { AuthFormContainer } from "./AuthFormContainer";

export const Auth = (props: any) => {

    return (
        <div className={"content rounded-2xl shadow-2xl p-5" + ' ' + styles.container}
             style={{background: "linear-gradient(90deg, #fab397, #f6edb2)"}}>
            <AuthFormContainer />
        </div>
    )
}