/////////////////////////
//// Root of our app ////
/////////////////////////
require('./config/config.js');

var express = require('express');
var bodyParser = require('body-parser');

var {
    mongoose
} = require('./db/mongoose.js');
var {
    Todo
} = require('./models/todo.js');
var {
    User
} = require('./models/user.js');

const {
    ObjectID
} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e);
    })
});

// GET /todos/1234556 <- id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id))
        return res.status(404).send();

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    });

})

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid)
        return res.status(404).send();
    
    Todo.findByIdAndRemove(id).then((doc)=>{
        if(!doc)
            return res.status(404).send();
        res.send(doc);
    },(e)=>{
        res.status(400).send();
    });
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

app.post('/users',(req,res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save().then(()=>{
        user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth', token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
})

module.exports = {
    app
}