const mongoose = require('mongoose');

// promisess lepsze od callbackow
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}