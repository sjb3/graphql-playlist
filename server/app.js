const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// bind express with graphql
app.use('/graphql', graphqlHTTP({
  // pass in a schema property
  schema,
}));

app.listen(PORT, (req, res) => {
  console.log(`>>> Server running on port: ${PORT}`);
});

