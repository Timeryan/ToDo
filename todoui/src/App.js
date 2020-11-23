import "./App.css";
import React from "react";
import ButtonAddNote from "./components/ButtonAddNote/ButtonAddNote.js";
import ProgressNavBar from "./components/ProgressNavBar/ProgressNavBar";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotes: [],
      isOpenEditNoteForAdd: false,
      isOpenEditNoteForEdit: false,
    };
  }

  getListNotesFromServer = () => {
    //загрузка
    fetch("https://localhost:44350/api/Notes")
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            listNotes: result,
          });
        });
  };
  addNoteToServer = (title, text) => {
    //добавление
    fetch("https://localhost:44350/api/Notes", {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        title: title,
        text: text,
        isComplete: false,
      }),
    })
        .then((response) => response.json())
        .then((data) => {
          this.getListNotesFromServer();
        });
    this.HiddenEditNoteForAdd();
  };

  delNoteFromServer = (id) => {
    // удаление
    console.log(id);
    fetch(`https://localhost:44350/api/Notes/${id}`, {
      method: "DELETE",
    })
        .then((response) => response.text())
        .then((data) => {
          this.getListNotesFromServer();
        });
  };

  ShowEditNoteForAdd = () => {
    this.setState({isOpenEditNoteForAdd: true});
  };
  HiddenEditNoteForAdd = () => {
    this.setState({isOpenEditNoteForAdd: false});
  };
  ShowEditNoteForEdit = () => {
    this.setState({isOpenEditNoteForAdd: true});
  };
  HiddenEditNoteForEdit = () => {
    this.setState({isOpenEditNoteForAdd: false});
  };

  componentDidMount() {
    this.getListNotesFromServer();
  }

  render() {
    return (
        <div className="App">
          <ButtonAddNote click={this.ShowEditNoteForAdd}/>
          <ProgressNavBar allNote="1" inProgressNote="1" Completed="1"/>
          {this.state.isOpenEditNoteForAdd && (
              <EditNote
                  functionForCancelButton={this.HiddenEditNoteForAdd}
                  functionForCheckButton={this.addNoteToServer}
              />
          )}
          {this.state.isOpenEditNoteForEdit && (
              <EditNote
                  functionForCancelButton={this.HiddenEditNoteForEdit}
                  functionForCheckButton={() =>{console.log("1")}}
              />
          )}

          {this.state.listNotes.map((note, index) => (
              <Note
                  functionForCrossButton={this.delNoteFromServer}
                  functionForEditButton={this.ShowEditNoteForEdit}
                  key={index}
                  id={
                    this.state.listNotes[this.state.listNotes.length - 1 - index].id
                  }
                  title={
                    this.state.listNotes[this.state.listNotes.length - 1 - index]
                        .title
                  }
                  text={
                    this.state.listNotes[this.state.listNotes.length - 1 - index].text
                  }
              />
          ))}
        </div>
    );
  }
}

export default App;
