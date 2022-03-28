const User = require('../../models/user.model');

module.exports = {
    Query: {
        getUsers() {
            return User.find();
        },
        getUser(parent, args, context) {
            return User.findById(args.id);
        }
    },
    Mutation: {
        updateUser(parent,args, context) {
            return User.findByIdAndUpdate(context.userId, args.userInput);
        }
    }

}