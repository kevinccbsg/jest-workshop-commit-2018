import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

describe('Header', () => {
  it('contains an h1 element', () => {
    const result = wrapper.find('h1').exists();
    const expected = true;
    expect(result).toEqual(expected);
  });
});
