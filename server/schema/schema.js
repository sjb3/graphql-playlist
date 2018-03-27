// import _ from 'lodash';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = require('graphql');
const _ = require('lodash');

// Dummy Data =. should be updated with mongoDB or postgrsql
const books = [
  { name: 'Gone With The Wind', genre: 'Drama', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Flat Liners', genre: 'Drama', id: '3' },
];

const authors = [
  { name: 'Patric Momo', age: 22, id: '1' },
  { name: 'Brandon Sasa', age: 33, id: '2' },
  { name: 'Terry Roberts', age: 44, id: '3' },
];

// Best Practice: define the type and set the relationship and define Root Query
// Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

// Author Type
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});
// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        /* // code to get data from db/ other source */
        console.log(typeof (args.id));
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        /* // code to get data from db/ other source */
        console.log(typeof (args.id));
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
