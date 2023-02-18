const express = require('express');
require('dotenv').config();
const app = express();

const { graphqlHTTP } = require('express-graphql');

const graphqlSchema = require('./schema/index');
const graphqlResolver = require('./resolver/index');

app.use(require('./middleware/auth.middle'));

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

app.get('/', (req,res) => {
    res.send('app working!!')
});


module.exports = app;