import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // bind apollo and react

import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { Title } from './styled/styled';

// Apollo client set-up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <Title>Reading List</Title>
          <hr />
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
