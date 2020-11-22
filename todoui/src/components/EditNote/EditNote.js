import React from "react"
import classes from "./EditNote.module.css"


function EditNote(props) {
    return (
        <div className={classes.edit_note}>
            <div className={classes.title_text}>
                <input placeholder="Title" className={classes.title}>{props.title}</input>
                <textarea placeholder="Text" className={classes.text}>{props.text}</textarea>
            </div>
            <div className={classes.buttons}>
                <div className={classes.btn_add_temp}></div>
                <div className={classes.btn_add_temp}></div>
            </div>
        </div>
    );
}

export default EditNote
