import React from "react";
import classes from "./EditNote.module.css";
import ButtonForEditNote from "../ButtonForEditNote/ButtonForEditNote";
import ImgCheck from "./check.svg";
import ImgCross from "./cross.svg";

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", text: ""};
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className={classes.edit_note}>
                <div className={classes.title_text}>
                    <input
                        name="title"
                        placeholder="Title"
                        className={classes.title}
                        value={this.state.title}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <textarea
                        name="text"
                        placeholder="Text"
                        className={classes.text}
                        value={this.state.text}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className={classes.buttons}>
                    <ButtonForEditNote
                        click={() =>
                            this.props.functionForCheckButton(
                                this.state.title,
                                this.state.text
                            )
                        }
                        text="Добавить"
                        img={ImgCheck}
                    />
                    <ButtonForEditNote
                        click={() => this.props.functionForCancelButton()}
                        text="Отмена"
                        img={ImgCross}
                    />
                </div>
            </div>
        );
    }
}

export default EditNote
