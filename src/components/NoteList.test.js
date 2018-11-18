import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NoteList from './NoteList';
import { notes } from '../../test/fixtures/api';

const props = {
  items: notes,
};

describe('<NoteList />', function() {
  it('Match snapshot', () => {
    const tree = renderer.create(<NoteList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});