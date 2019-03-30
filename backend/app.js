const express = require('express');
const graphqlHTTP = require('express-graphql');
const moon = require('mongoose')
const schema = require('./schema/schema');
const cors = require('cors');

// load env variables
require('dotenv').config();

const app = express();
const PORT = process.env.IE_PORT;

// allow cross origin request
app.use(cors());

// database connection
moon.connect(process.env.IE_CONN);
moon.connection.once('open', () => {
    console.log('Connection Established!');
})

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('Now Listening on '+PORT);
});