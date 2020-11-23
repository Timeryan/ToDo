import React from "react"
import classes from "./ButtonForEditNote.module.css"


function ButtonForEditNote(props) {
    return (
        <div className={classes.button_for_edit_note} onClick={props.click}>
            <img className={classes.img} src={props.img} alt="ImgPlus"/>
            <span>{props.text}</span>
        </div>
    );
}
export default ButtonForEditNote
