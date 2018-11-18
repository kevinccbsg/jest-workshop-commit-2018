import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';
import { note } from '../../test/fixtures/api';

const props = {
  ...note,
};

describe('<ListItem />', function() {
  it('Match snapshot', () => {
    const tree = renderer.create(<ListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not show description value', () => {
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.find('.description').exists()).toEqual(false);
  });

  it('should show description value after header click', () => {
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.find('.header').simulate('click');
    expect(wrapper.find('.description').exists()).toEqual(true);
  });
});