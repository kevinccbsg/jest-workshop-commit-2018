import { notes, newNote } from '../../../test/fixtures/api';

export default () => new Promise((resolve) => {
  return resolve([...notes, newNote]);
});
