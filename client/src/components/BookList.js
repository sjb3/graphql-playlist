import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'; // glue components and query together

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Book List</h3>
          <ul id='book-list'>
          </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);