import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from './NoteForm.css';

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.title, this.state.description)
  }

  render() {
    const { title, description } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <Input
            type="text"
            required
            placeholder="title"
            name="title"
            value={title}
            onChange={({ target }) => this.handleChange('title', target.value)}
          />
        </div>
        <div className="field">
          <Input
            type="text"
            required
            placeholder="description"
            name="description"
            value={description} 
            onChange={({ target }) => this.handleChange('description', target.value)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button className="ui button secondary">Save</Button>
        </div>
      </form>
    );
  }
}

NoteForm.defaultProps = {
  onSubmit: () => 0,
};

export default NoteForm;
