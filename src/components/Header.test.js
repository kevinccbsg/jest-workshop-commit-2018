import React from 'react';
// helper library
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('<Header> should have the children content', () => {
    const tree = renderer.create((
      <Header>Create notes</Header>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
