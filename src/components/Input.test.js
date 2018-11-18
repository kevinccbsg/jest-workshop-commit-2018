import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from './Input';

const props = {
  onChange: () => 0,
};

describe('<Input />', function() {
  it('Match snapshot', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onChangeProps with right values', () => {
    const mockProps = {
      ...props,
      onChange: jest.fn(),
    };
    const wrapper = shallow(<Input {...mockProps} />);
    wrapper.find('input').props().onChange('change');
    expect(mockProps.onChange).toHaveBeenCalledWith('change');
  });
});
