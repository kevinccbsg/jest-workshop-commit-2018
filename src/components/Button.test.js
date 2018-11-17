import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

const props = {
  children: 'Name button',
  onClick: () => 0,
  className: 'primary',
  value: 1,
};

describe('<Button />', () => {

  it('<Button /> match snapshot', () => {
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  const wrapper = shallow(<Button {...props} />);
  it(`button contains ${props.className}`, () => {
    expect(wrapper.find(`.${props.className}`).exists()).toEqual(true);
  });

  it(`button contains ${props.children}`, () => {
    expect(wrapper.find(`.${props.className}`).props().children).toEqual(props.children);
  });

  // spys
  it('calls onClick prop when it is clicked', () => {
    const mockProps = {
      ...props,
      onClick: jest.fn(),
    };
    const newWrapper = shallow(<Button {...mockProps} />);
    newWrapper.find(`.${props.className}`).props().onClick();
    expect(mockProps.onClick).toHaveBeenCalledWith(props.value);
  });
});
