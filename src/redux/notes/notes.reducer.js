import { NotesActionTypes } from "./notes.actionTypes";

const INITIAL_STATE = [];

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.CREATE_NOTE:
      return [...state, action.payload];
    case NotesActionTypes.GET_NOTES:
      return action.payload;

    case NotesActionTypes.DELETE_NOTE:
      return state.filter((note) => note._id !== action.payload);

    default:
      return state;
  }
};

export default notesReducer;
