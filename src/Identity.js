import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

class Identity extends Component {
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

  render() {
    const { loading, user } = this.state;

    return !user ? (
      <button onClick={this.login}>Log in</button>
    ) : (
      <div>
        <p>Hey {user.user_metadata.full_name || user.email}</p>
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default Identity;
