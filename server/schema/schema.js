// import _ from 'lodash';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require('graphql');
const _ = require('lodash');
// const Book = require('../models/book');
const Author = require('../models/author');

// Dummy Data =. should be updated with mongoDB or postgrsql
// const books = [
//   {
//     name: 'Gone With The Wind', genre: 'Drama', id: '1', authorId: '1',
//   },
//   {
//     name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2',
//   },
//   {
//     name: 'The Flat Liners', genre: 'Drama', id: '3', authorId: '3',
//   },
//   {
//     name: 'The Hero Of Ages', genre: 'SciFi', id: '4', authorId: '2',
//   },
//   {
//     name: 'The Color Of Magic', genre: 'Drama', id: '5', authorId: '3',
//   },
//   {
//     name: 'The Light Fantastic', genre: 'SciFi', id: '6', authorId: '3',
//   },
// ];

// const authors = [
//   { name: 'Patric Momo', age: 22, id: '1' },
//   { name: 'Brandon Sasa', age: 33, id: '2' },
//   { name: 'Terry Roberts', age: 44, id: '3' },
// ];

// Best Practice: define the type and set the relationship and define Root Query
// Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // console.log(parent);
        // return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

// Author Type
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, { authorId: parent.id });
      },
    },
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
        // console.log(typeof (args.id));
        // return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        /* // code to get data from db/ other source */
        // consol e.log(typeof (args.id));
        // return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  field: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age,
        });
        return author.save();// now save to the mongodb
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
