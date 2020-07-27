const BookType = require('../types/BookType')
const Book = require('../models/book');

module.exports = {
    type: new GraphQLList(BookType),
    resolve() {
        return Book.find({});
    }
}



        // type: AuthorType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args) {
        //         return Author.findById(args.id);
        //     }