const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '1234',
            name: 'John', 
            email: 'john@gmail.com', 
            password: 'foolish', 
            entries: 0, 
            joined: new Date()
        },
        {
            id: '1235',
            name: 'Sally', 
            email: 'Sally@gmail.com', 
            password: 'hehe', 
            entries: 0, 
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);

})

app.post('/signin', (req, res) => {
    res.json('success');
})

app.post('/register', (req, res) => {
    
})

app.get('/profile/:id', (req, res) => {

})

app.put('/image', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('testing app');
})