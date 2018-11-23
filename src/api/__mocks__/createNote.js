import { notes, newNote } from '../../../test/fixtures/api';

export default (title = newNote.title, description = newNote.description) => new Promise((resolve) => {
  return resolve([...notes, { title, description }]);
});
