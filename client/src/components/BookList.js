import React, { Component } from 'react'
import { graphql } from 'react-apollo'; // glue components and query together
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  displayBooks() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading Books...</div>);
    } else {
      return data.books.map(book => (
        <li onClick={e => {this.setState({ selected: book.id})}} key={book.id}>{book.name}</li>
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
          <BookDetails bookid={this.state.selected} />
      </div>
    );
  }
}
// console.log(this.props.data.books);

export default graphql(getBooksQuery)(BookList);
// export default graphql(getBooksQuery)(BookList);