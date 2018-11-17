import 'babel-polyfill';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import styles from './App.css';
import { getDate } from '../api';

const items = [
  {
    id: '0',
    title: 'Note 1',
    description: 'description',
  }
];

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
    this.setState({ date });
  }

  render() {
    const { route } = this.state;
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
                <NoteForm />
              </div>
              <div className={styles.container}>
                <h2>Note list</h2>
                <NoteList items={items} />
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
