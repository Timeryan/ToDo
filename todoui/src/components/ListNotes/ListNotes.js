import React from "react"
import Note from "../Note/Note";


class ListNotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return (
            <div>
                <button onClick=>ОК</button>
                <Note title={this.state.count} text="Имя больше не может содержать заглавные буквы "/>
                <Note title="Name" text="Name can no longer contain capital letters"/>
            </div>
        );
    }


}

export default ListNotes
