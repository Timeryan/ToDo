import React from "react";
import classes from "./Note.module.css";
import edit from "./edit.svg";
import cross from "./cross.svg";
import circle from "./circle.svg"

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.note}>
                <div className={classes.checkbox_title_text}>
                    <img src={circle} alt="круг"/>
                    <div className={classes.title_text}>
                        <span className={classes.title}>{this.props.title}</span>
                        <span className={classes.text}>{this.props.text}</span>
                    </div>
                </div>
                <div className={classes.edit_cross}>
                    <img
                        className={classes.img_edit_cross}
                        src={edit}
                        alt={edit}
                        onClick={() =>
                            this.props.functionForEditButton(
                                this.props.id,
                                this.props.title,
                                this.props.text,
                            )
                        }
                    />
                    <img
                        className={classes.img_edit_cross}
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
