import './App.css';
import React from "react"
import ButtonAddNote from "./components/ButtonAddNote/ButtonAddNote.js"
import ProgressNavBar from "./components/ProgressNavBar/ProgressNavBar";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listNotes: []};
    }

    getListNotesFromServer = () => {
        fetch("https://localhost:44350/api/Notes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        listNotes: result
                    });
                },
            )
    }

    componentDidMount() {
        this.getListNotesFromServer();
    }

    render() {
        return (
            <div className="App">
                <ButtonAddNote click={this.getListNotesFromServer}/>
                <ProgressNavBar allNote="1" inProgressNote="1" Completed="1"/>
                <EditNote/>
                {this.state.listNotes.map((note) =>
                    <Note key = {note.id} title={note.title} text={note.text}/>
                )}



            </div>
        )
    }
}

export default App
