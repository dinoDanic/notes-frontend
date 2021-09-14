import axios from "axios";

const url = "http://localhost:5000/api/notes";

export const createNote = (newPost) => axios.post(url, newPost);
export const getNotes = () => axios.get(url);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
