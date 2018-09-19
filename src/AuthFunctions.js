import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

class AuthFunctions extends Component {
  state = { loading: true, user: null, todos: [] };

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user => {
      this.setState({ user }, () => {
        netlifyIdentity.close();
      });
      this.getTodos();
    });
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

  getTodos = () =>
    fetch('/.netlify/functions/getTodos')
      .then(res => res.json())
      .then(({ todos }) => this.setState({ loading: false, todos }))
      .catch(console.error);

  render() {
    const { loading, user, todos } = this.state;

    return !user ? (
      <button onClick={this.login}>Log in</button>
    ) : (
      <div>
        <p>Hey {user.user_metadata.full_name || user.email}</p>
        <button onClick={this.logout}>Log out</button>
        {loading ? (
          <p>Loading todos...</p>
        ) : (
          <React.Fragment>
            <h3>Your todos</h3>
            <ul>
              {todos.map(todo => (
                <li key={todo}>{todo}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AuthFunctions;
