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
      serverApi: "https://71cb250c7f4b.eu.ngrok.io/api/Notes",
      EditNoteForEdit: {
        isOpenEditNoteForEdit: false,
        id: 0,
        title: "",
        text: "",

      },
    };
  }

  getListNotesFromServer = () => {
    //загрузка
    fetch(this.state.serverApi)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listNotes: result,
        });
      });
  };
  addNoteToServer = (id, title, text) => {
    console.log(title);
    fetch(this.state.serverApi, {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        title,
        text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getListNotesFromServer();
      });
    this.hiddenEditNoteForAdd();
  };

  delNoteFromServer = (id) => {
    // удаление

    fetch(`${this.state.serverApi}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        this.getListNotesFromServer();
      });
  };
  editNoteFromServer = (id, title, text) => {
    console.log(id, title, text);
    fetch(`${this.state.serverApi}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id,
        title,
        text,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        this.getListNotesFromServer();
        this.hiddenEditNoteForEdit();
      });
  };

  showEditNoteForAdd = () => {
    this.setState({ isOpenEditNoteForAdd: true });
  };
  hiddenEditNoteForAdd = () => {
    this.setState({ isOpenEditNoteForAdd: false });
  };
  showEditNoteForEdit = (id, title, text) => {
    this.setState({
      EditNoteForEdit: {
        isOpenEditNoteForEdit: true,
        id: id,
        title: title,
        text: text,
      },
    });
  };
  hiddenEditNoteForEdit = () => {
    this.setState({ EditNoteForEdit: { isOpenEditNoteForEdit: false } });
  };

  componentDidMount() {
    this.getListNotesFromServer();
  }

  render() {
    return (
      <div className="App">
        <ButtonAddNote click={this.showEditNoteForAdd} />
        <ProgressNavBar allNote={this.state.listNotes.length} />
        {this.state.isOpenEditNoteForAdd && (
          <EditNote
            ButtonCheckName={"Добавить"}
            functionForCancelButton={this.hiddenEditNoteForAdd}
            functionForCheckButton={this.addNoteToServer}
          />
        )}
        {this.state.EditNoteForEdit.isOpenEditNoteForEdit && (
          <EditNote
            ButtonCheckName="Сохранить "
            id={this.state.EditNoteForEdit.id}
            title={this.state.EditNoteForEdit.title}
            text={this.state.EditNoteForEdit.text}
            functionForCancelButton={this.hiddenEditNoteForEdit}
            functionForCheckButton={this.editNoteFromServer}
          />
        )}

        {this.state.listNotes.map((note, index) => (
          <Note
            functionForCrossButton={this.delNoteFromServer}
            functionForEditButton={this.showEditNoteForEdit}
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
