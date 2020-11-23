import React from "react";
import classes from "./Note.module.css";
import edit from "./edit.svg";
import cross from "./cross.svg";
import star from "./star.svg";

class Note extends React.Component{
    constructor(props) {
        super(props);
        this.state={id: props.id}
    }
    render() {


    return (
        <div className={classes.note}>
            <div className={classes.checkbox_title_text}>
                <input type="checkbox"/>
                <div className={classes.title_text}>
                    <span className={classes.title}>{this.props.title}</span>
                    <span className={classes.text}>{this.props.text}</span>
                </div>
            </div>
            <div className={classes.star_edit_cross}>
                <img className={classes.img_star_edit_cross} src={star} alt={star}/>
                <img className={classes.img_star_edit_cross} src={edit} alt={edit}/>
                <img
                    className={classes.img_star_edit_cross}
                    src={cross}
                    alt={cross}
                    onClick={() => this.props.functionForCrossButton(this.props.id)}
                />
            </div>
        </div>
    );
    }
}

export default Note
