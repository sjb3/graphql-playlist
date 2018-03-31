const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

// connect to mlab db
mongoose.connect('mongodb://sjb3:password@ds035643.mlab.com:35643/graphql-playlist');
mongoose.connection.once('open', () => {
  console.log('>>>> Now, connected to mongoDB mLab');
});
// import express from 'express';
// import graphqlHTTP from 'express-graphql';

const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// bind express with graphql
app.use('/graphql', graphqlHTTP({
  // pass in a schema property
  schema,
  graphiql: true,
}));

app.listen(PORT, (req, res) => {
  console.log(`>>> Server running on port: ${PORT}`);
});

