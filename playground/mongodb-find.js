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

    // Zwraca wszystkie 'rekordy'
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // })

    // db.collection('Todos').find({
    //     completed: false
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // })


    // db.collection('Todos').find({
    //     _id: new ObjectID('5bf99e6fbefdd12ce58092c2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // })
    var name = "Jan";
    db.collection('Users').find({
        name
    }).toArray().then((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err)
            console.log('Unable to fetch Users');
    })

    // db.close();
});