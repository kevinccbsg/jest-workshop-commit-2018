import 'babel-polyfill';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import styles from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ route: 'app' });
  }

  async componentDidMount() {
    const response = await fetch('http://worldclockapi.com/api/json/est/now');
    const date = await response.json();
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <Header>
          Create your cool notes
        </Header>
        <main className={styles.appContainer}>
          <Button className="ui button secondary" onClick={this.handleClick}>Access</Button>
        </main>
      </div>
    );
  }
}

export default App;
