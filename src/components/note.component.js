import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/notes/notes.actions";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.message}</h2>
      <p onClick={() => handleDelete(note._id)}>delete</p>
    </div>
  );
};

export default Note;
