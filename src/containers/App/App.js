import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import NoteList from '../../components/NoteList';
import NoteForm from './../NoteForm';
import styles from './App.css';
import { getDate } from '../../api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      date: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ route: 'app' });
  }

  async componentDidMount() {
    const date = await getDate();
    this.props.getNotes();
    this.setState({ date });
  }

  render() {
    const { route } = this.state;
    const { notes } = this.props;
    return (
      <div>
        <Header>
          Create your cool notes
        </Header>
        <main>
          {route === 'home' && (
            <div className={styles.appContainer}>
              <Button className="ui button secondary" onClick={this.handleClick}>Access</Button>
            </div>
          )}
          {route === 'app' && (
            <div>
              <div className={styles.container}>
                <h2>Create note</h2>
                <NoteForm onSubmit={this.props.createNote} />
              </div>
              <div className={styles.container}>
                <h2>Note list</h2>
                <NoteList items={notes} />
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
