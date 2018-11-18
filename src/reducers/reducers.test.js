import reducer from '.';
import { SET_NOTES } from '../actions';
import { notes } from '../../test/fixtures/api';

describe('Reducer test', () => {
  it('set note', () => {
    const action = {
      type: SET_NOTES,
      payload: notes,
    };
    const newState = reducer({}, action);
    expect(newState).toEqual({
      notes,
    })
  });

  it('default action', () => {
    const action = {
      type: 'default',
    };
    const initState = { default: true };
    const newState = reducer(initState, action);
    expect(newState).toEqual(initState)
  });
});
