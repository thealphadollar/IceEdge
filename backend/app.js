const express = require('express');
const graphqlHTTP = require('express-graphql');
const moon = require('mongoose')
const schema = require('./schema/schema');
const cors = require('cors');

// load env variables
require('dotenv').config();

const app = express();
const PORT = process.env.IE_PORT;
const CONN_STR = process.env.IE_CONN;
// allow cross origin request
app.use(cors());

// see if env variables present
if (!(typeof(CONN_STR) === "string" || typeof(Number(PORT))==="number")){
    console.log("Please set the necessary environment variables!")
    process.exit(1);
};

// database connection
moon.connect(CONN_STR);
moon.connection.once('open', () => {
    console.log('Connection Established!');
})

app.use('/api/v1', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('Now Listening on '+PORT);
});