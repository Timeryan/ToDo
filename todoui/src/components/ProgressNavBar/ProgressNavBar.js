import React from "react"
import classes from "./ProgressNavBar.module.css"

function ProgressNavBar(props) {
    return (
        <div className={classes.progress_nav_bar}>
            <span>Заметки ({props.allNote})</span>
        </div>
    );
}
export default ProgressNavBar
