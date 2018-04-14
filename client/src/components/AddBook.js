import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'; // glue components and query together

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthos() {
    var data = this.props.data;
    if (data.loading) {
      return(
        <option disabled>Loading Authors</option>
      )
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>{author.name}</option>
        )
      })
    }
  }

  render() {
    return (
      <form id='add-book'>
        <div className='field'>
          <lable>Book Name: </lable>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Genre: </label>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Author: </label>
          <select>
            <option>Select Author:  </option>
            {this.displayAuthos()}
          </select>
        </div>

        <button name="action" className="btn btn-success" type="submit">+</button>
      </form>
    )
  }
}


export default graphql(getAuthorsQuery)(AddBook);