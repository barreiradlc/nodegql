const graphql = require('graphql');
const { GraphQLList } = graphql;
const BookType = require('../types/BookType')

module.exports = {
    books: {
        type: new GraphQLList(BookType),
        resolve() {
            return Book.find({});
        }
    }
}


