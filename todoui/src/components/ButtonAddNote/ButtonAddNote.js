import React from "react"
import classes from "./ButtonAddNote.module.css"
import ImgPlus from "./plus.svg"

function ButtonAddNote(props) {
    return (
        <div className={classes.button_add_note} onClick={props.click}>
            <img className={classes.img_plus} src={ImgPlus} alt="ImgPlus"/>
            <span>Добавить</span>
        </div>
    );
}
export default ButtonAddNote
