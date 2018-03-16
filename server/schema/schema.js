const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

  // hardcoded data/array
// const books = [
//   {
//     id: '1',
//     name: 'HAHA',
//     genre: 'horror',
//   },
//   {
//     id: '2',
//     name: 'HAHAha',
//     genre: 'mystery',
//   },
// ];

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
        // code to get data from db / other source
        // for (let i = 0; i < books.length; i++) {
        //   if (books[i].id == args.id) {
        //     return books[i];
        //   }
        // }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
