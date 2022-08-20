import React from 'react'
import {connect} from "react-redux";
import {State} from "../../store/store";
import {Dialogues} from "./Dialogues";


const mapStateToProps = (state: State) => {
    return {
        dialogues: state.dialoguesPage.users,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)