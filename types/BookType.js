require('./IndexTypes.js')
const AuthorType = require('./AuthorType')
const Author = require('../models/author')
const AuthorResolver = require('../resolvers/author')

const BookType = new GraphQLObjectType({
    name: 'Book',
    //We are wrapping fields in the function as we dont want to execute this ultil 
    //everything is inilized. For example below code will throw error AuthorType not 
    //found if not wrapped in a function
    fields: () => ({    
        id: { type: GraphQLID  },
        name: { type: GraphQLString }, 
        pages: { type: GraphQLInt },
        author: AuthorResolver
        // author: {
        //     type: AuthorType,   	
        //         resolve(parent, args) {
        //             return Author.findById(parent.authorID);
        //     }
        // }
    })
});



module.exports = BookType