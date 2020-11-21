import './App.css';
import React from "react"
import ButtonAddNote from "./components/ButtonAddNote/ButtonAddNote.js"
import ProgressNavBar from "./components/ProgressNavBar/ProgressNavBar";
import Note from "./components/Note/Note";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    AddNote = ()=>{
        this.setState(({count}) => ({
            count: count + 1,
        }));
    }

    render() {
        return (
            <div className="App">
                <ButtonAddNote click={this.AddNote}/>
                <ProgressNavBar allNote={this.state.count} inProgressNote="1" Completed="1"/>
                    {[...Array(this.state.count)].map(() =>
                    <Note title={this.state.count}
                          text="Name can no longer contain capital letters"/>
                )}
            </div>
        );
    }
}

export default App;
