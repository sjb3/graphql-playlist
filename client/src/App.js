import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // bind apollo and react

import BookList from './components/BookList';

// Apollo client set-up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h2>Reading List</h2>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
