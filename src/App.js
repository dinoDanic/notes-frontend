import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Note from "./components/note.component";

import { createNote, getNotes } from "./redux/notes/notes.actions";

import "./app.css";

const App = () => {
  const notes = useSelector((state) => state.notes);
  const [newNote, setNewNote] = useState({ title: "", message: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(newNote));
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <>
      {notes?.map((note) => {
        return <Note key={note._id} note={note} />;
      })}
      <div className="showNotes"></div>
      <div className="send-note">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <h1>send note</h1>
            <input
              type="text"
              placeholder="title"
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="msg"
              onChange={(e) =>
                setNewNote({ ...newNote, message: e.target.value })
              }
            />
            <button type="submit">send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
