const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO)

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
    schema,    
    graphiql:true
}));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000');
}); 