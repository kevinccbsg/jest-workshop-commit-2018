import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

const props = {
  onSubmit: () => 0,
};

const initialState = {
  title: '',
  description: '',
};

const changedState = {
  title: 'title test',
  description: 'description test',
};

describe('<NoteForm />', () => {
  it('renders initial state', () => {
    const wrapper = shallow(<NoteForm {...props} />);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('renders changedState after input changes', () => {
    const wrapper = shallow(<NoteForm {...props} />);
    const titleInput = wrapper.find('Input').at(0);
    const descriptionInput = wrapper.find('Input').at(1);
    titleInput.props().onChange({ target: { value: changedState.title } });
    descriptionInput.props().onChange({ target: { value: changedState.description } });
    expect(wrapper.state()).toEqual(changedState);
  });

  it('returns title and description state value when we submit the form', () => {
    const mockProps = {
      ...props,
      onSubmit: jest.fn(),
    };
    const wrapper = shallow(<NoteForm {...mockProps} />);
    const titleInput = wrapper.find('Input').at(0);
    const descriptionInput = wrapper.find('Input').at(1);
    titleInput.props().onChange({ target: { value: changedState.title } });
    descriptionInput.props().onChange({ target: { value: changedState.description } });
    wrapper.find('form').props().onSubmit({ preventDefault: () => 0 });
    expect(mockProps.onSubmit).toHaveBeenCalledWith(changedState.title, changedState.description);
  });
});
