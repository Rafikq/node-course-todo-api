const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');
// var id = "6c0155d47dab04187cbbdb8a1";

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// 
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Do szukania jednego lepsza jest ta opcja
// Todo.findById(id).then((todo) => {
//     if (!todo)
//         return console.log('id not found')
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

const userID = "5c018fd218091a62f597fe7e";

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));