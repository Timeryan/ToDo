import './App.css';
import React from "react"
import ButtonAddNote from "./components/ButtonAddNote/ButtonAddNote.js"
import ProgressNavBar from "./components/ProgressNavBar/ProgressNavBar";
import Note from "./components/Note/Note";

function App() {
    return (
        <div className="App">

            <ButtonAddNote/>
            <ProgressNavBar allNote="1" inProgressNote="1" Completed="1"/>
            <Note title="Название" text="Имя больше не может содержать заглавные буквы "/>
            <Note title="Name" text="Name can no longer contain capital letters"/>
        </div>
    );
}

export default App;
