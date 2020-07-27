require('./IndexTypes.js')
const BookType = require('./BookType')
const Book = require('../models/book')
const BooksResolver = require('../resolvers/books')
const Author = require('../models/author')

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },        
        // books: BooksResolver  
    })
})

module.exports = AuthorType