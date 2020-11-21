import React from "react"
import classes from "./ProgressNavBar.module.css"

function ProgressNavBar(props) {
    return (
        <div className={classes.progress_nav_bar}>
            <span>Все Заметки ({props.allNote})</span>
            <span>В Процессе ({props.inProgressNote})</span>
            <span>Выполненые ({props.Completed})</span>
        </div>
    );
}
export default ProgressNavBar
