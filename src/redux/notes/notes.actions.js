import * as api from "../../api";
import { NotesActionTypes } from "./notes.actionTypes";

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({
      type: NotesActionTypes.CREATE_NOTE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.getNotes();
    dispatch({
      type: NotesActionTypes.GET_NOTES,
      payload: data,
    });
  } catch (err) {}
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch({
      type: NotesActionTypes.DELETE_NOTE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
