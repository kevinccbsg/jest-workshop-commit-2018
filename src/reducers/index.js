import { SET_NOTES } from '../actions';

const initState = {
  notes: [],
};

export default (state = { ...initState }, action) => {
  switch (action.type) {
    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }
    default:
      return { ...state };
  }
};