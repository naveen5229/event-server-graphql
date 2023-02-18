const express = require('express');
require('dotenv').config();
const app = express();

const { graphqlHTTP } = require('express-graphql');

const graphqlSchema = require('./schema/index');
const graphqlResolver = require('./resolver/index');

const CORS = require('cors');

app.use(CORS({
    origin: `http://localhost:3000`
}));

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