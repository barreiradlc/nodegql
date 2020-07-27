require('../types/IndexTypes')

const AuthorType = require('../types/AuthorType')
const Author = require('../models/author')

module.exports = {
    type: AuthorType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        console.debug('args')        
        console.debug(args.id)

        return Author.findById(args.id);
    }
}



        