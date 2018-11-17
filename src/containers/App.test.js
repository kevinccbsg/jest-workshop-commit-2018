import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { date } from '../../test/fixtures/api';

jest.mock('../api/getDate');

const props = {};

describe('<App />', () => {
  
  const shallowWrapper = shallow(<App />);
  const mountWrapper = mount(<App />);

  it('<Button /> match snapshot', () => {
    const tree = renderer.create(<App {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  console.log(shallowWrapper.debug());
  console.log(mountWrapper.debug());

  it('must render Header component' , () => {
    expect(shallowWrapper.find('Header').exists()).toEqual(true);
  });

  it('must render Button component' , () => {
    expect(shallowWrapper.find('Button').exists()).toEqual(true);
  });

  it('must have state property route with "home" value', () => {
    expect(shallowWrapper.state().route).toEqual('home');
  });

  it('Button click change state property route to "app" value', () => {
    shallowWrapper.find('Button').props().onClick();
    expect(shallowWrapper.state().route).toEqual('app');
  });

  it.only('must have state property date not {}', async () => {
    const newShallowComponent = await shallow(<App />);
    const result = newShallowComponent.state().date;
    expect(result).toEqual(date);
  });
});

