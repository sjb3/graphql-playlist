const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');
const _ = require('lodash');

// Dummy Data
const books = [
  { name: 'Gone With The Wind', genre: 'Drama', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Flat Liners', genre: 'Drama', id: '3' },
];

// Best Practice: define the type and set the relationship and define Root Query
// Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        /* // code to get data from db/ other source */
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
