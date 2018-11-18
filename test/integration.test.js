import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../src/store';
import App from '../src/containers/App';
import { newNote } from './fixtures/api';

jest.mock('../src/api/getNotes');
jest.mock('../src/api/createNote');
jest.mock('../src/api/getDate');

let app;

describe('Application integration tests', () => {

  beforeEach(async () => {
    console.log('Before each test');
    app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    app.find('Button').props().onClick();

    await Promise.resolve().then(() => app.update());
  });

  it('Access to application', async () => {
    expect(app.find('NoteForm').exists()).toEqual(true);
    expect(app.find('NoteList').exists()).toEqual(true);
  });

  it('renders one item after button click', async () => {
    expect(app.find('ListItem').length).toEqual(1);
  });

  it('renders two item after complete form and send it', async () => {
    console.log('test');
    const titleInput = app.find('Input').at(0);
    const descriptionInput = app.find('Input').at(1);
    titleInput.props().onChange({ target: { value: newNote.title } });
    descriptionInput.props().onChange({ target: { value: newNote.description } });
    //app.find('NoteForm').props().onSubmit(newNote.title, newNote.description);
    app.find('form').props().onSubmit({ preventDefault: () => 0 });
    
    await Promise.resolve().then(() => app.update());

    expect(app.find('ListItem').length).toEqual(2);
  });

  afterEach(() => console.log('Integration test finished'));
});

afterAll((done) => {
  console.log('Playing respect');
  done();
});

