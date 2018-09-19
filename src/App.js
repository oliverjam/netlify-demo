import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

class LambdaDemo extends Component {
  state = { loading: false, user: null };

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user =>
      this.setState({ user }, () => {
        netlifyIdentity.close();
      })
    );
    netlifyIdentity.on('logout', user => {
      netlifyIdentity.close();
      this.setState({ user: null });
    });
  }

  logout = () => {
    netlifyIdentity.logout();
  };

  login = () => {
    netlifyIdentity.open();
  };

  // handleClick = e => {
  //   e.preventDefault();

  //   this.setState({ loading: true });
  //   fetch('/.netlify/functions/hello')
  //     .then(response => response.json())
  //     .then(json => this.setState({ loading: false, msg: json.msg }));
  // };

  render() {
    const { loading, msg } = this.state;

    return <button onClick={this.login}>Log in</button>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </div>
    );
  }
}

export default App;
