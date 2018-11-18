import * as api from '../api';

export const SET_NOTES = 'SET_NOTES';
export const getNotes = () => async dispatch => {
  const notes = await api.getNotes();
  return dispatch({
    type: SET_NOTES,
    payload: notes,
  });
};

const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = (title, description) => async dispatch => {
  const notes = await api.createNote(title, description);
  return dispatch({
    type: SET_NOTES,
    payload: notes,
  });
};