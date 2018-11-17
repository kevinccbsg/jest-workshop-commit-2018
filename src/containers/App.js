import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

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

  render() {
    return (
      <div>
        <Header>
          Create your cool notes
        </Header>
        <main>
          <Button onClick={this.handleClick}>Access</Button>
        </main>
      </div>
    );
  }
}

export default App;
