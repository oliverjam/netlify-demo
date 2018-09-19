import React, { Component } from 'react';
// import netlifyIdentity from 'netlify-identity-widget';

class Functions extends Component {
  state = { loading: false, todos: [] };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () =>
    fetch('/.netlify/functions/getTodos')
      .then(res => res.json())
      .then(({ todos }) => this.setState({ loading: false, todos }))
      .catch(console.error);

  render() {
    const { loading, todos } = this.state;

    return loading ? (
      <div>Loading...</div>
    ) : (
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default Functions;
