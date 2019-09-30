const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.graphql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// * conecting to the mongodb local database
mongoose.connect('mongodb://localhost:27017/student-todo-db', {useNewUrlParser: true, useCreateIndex: true})
    .then(() => {
        console.log(`Connected to the mongodb local database`);
    })
    .catch(err => {
        console.log(err);
    });

// * conecting to the graphql server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


// * create server

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});