// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    // Zad. 1
    // db.collection('Users').deleteMany({
    //     name: 'Jan'
    // }).then((result) => {
    //     console.log('Rekordy zostały usuniete');
    // })

    // Zad. 2
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bf9ac07e4ecf731606efe14')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});