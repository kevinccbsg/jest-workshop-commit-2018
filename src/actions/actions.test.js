import {
  getNotes,
  createNote,
  SET_NOTES,
} from '.';
import { notes, newNote } from '../../test/fixtures/api';

jest.mock('../api/getNotes');
jest.mock('../api/createNote');

describe('Action test', () => {
  it('getNotes', async () => {
    const dispatch = jest.fn();
    const action = await getNotes()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_NOTES,
      payload: notes,
    });
  });

  it('createNote', async () => {
    const dispatch = jest.fn();
    await createNote(newNote.title, newNote.description)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_NOTES,
      payload: [...notes, newNote], // { id: '3', newNote.title, newNote.description }
    });
  });
});

