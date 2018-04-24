import React, { Component } from 'react'
import { graphql } from 'react-apollo'; // glue components and query together
import { getBooksQuery } from '../queries/queries';


class BookList extends Component {
  displayBooks() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading Books...</div>);
    } else {
      return data.books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))
    }
  }

  render() {
    // console.log(this.props.data.books);
    return (
      <div>
        <h3>Book List</h3>
          <ul id='book-list'>
          {this.displayBooks()}
          </ul>
      </div>
    );
  }
}
// console.log(this.props.data.books);

export default graphql(getBooksQuery)(BookList);
// export default graphql(getBooksQuery)(BookList);