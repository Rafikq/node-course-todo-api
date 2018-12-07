const mongoose = require('mongoose');

// promisess lepsze od callbackow
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
}