import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('must have an h1 element', () => {
    const wrapper = shallow(<Header>Title</Header>);
    expect(wrapper.find('h1').exists()).toEqual(true);
  });
});
