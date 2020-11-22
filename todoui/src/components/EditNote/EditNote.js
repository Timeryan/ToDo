import React from "react"
import classes from "./Note.module.css"
import edit from "./edit.svg"
import cross from "./cross.svg"
import star from "./star.svg"

function Note(props) {
    return (
        <div className={classes.note}>
            <div className={classes.checkbox_title_text}>
                <input type="checkbox"/>
                <div className={classes.title_text}>
                    <span className={classes.title}>{props.title}</span>
                    <span className={classes.text}>{props.text}</span>
                </div>
            </div>
            <div className={classes.star_edit_cross}>
                <img className={classes.img_star_edit_cross} src={star} alt={star}/>
                <img className={classes.img_star_edit_cross} src={edit} alt={edit}/>
                <img className={classes.img_star_edit_cross} src={cross} alt={cross}/>
            </div>
        </div>
    );
}

export default Note
