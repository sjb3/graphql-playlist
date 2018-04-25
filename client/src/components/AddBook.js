import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'; // glue components and query together
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { Button } from '../styled/styled';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      genre: '',
      authorId: ''
    };
  }

  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    // console.log(this.props, this.props.data);

    if (data.loading) {
      return(<option disabled>Loading Authors ...</option>)
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>{author.name}</option>
        )
      })
    }
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }] // have them displayed in sync
    });
  }

  render() {
    return (
      <form id='add-book' onSubmit={this.submitForm.bind(this)}>
        <div className='field'>
          <label>Book Name: </label>
          <input type='text' onChange={e => this.setState({ name: e.target.value })}/>
        </div>

        <div className='field'>
          <label>Genre: </label>
          <input type='text' onChange={e => this.setState({ genre: e.target.value })}/>
        </div>

        <div className='field'>
          <label>Author: </label>
          <select onChange= {e => this.setState({ authorId: e.target.value })}>
            <option>Select Author:  </option>
            {this.displayAuthors()}
          </select>
        </div>

        <Button name="action" className="btn btn-success" type="submit">+</Button>
      </form>
    )
  }
}

// bound several different queries
// export default graphql(getAuthorsQuery)(AddBook)
export default compose(
 graphql(getAuthorsQuery,{name: "getAuthorsQuery"}),
 graphql(addBookMutation,{name: "addBookMutation"})
)(AddBook);