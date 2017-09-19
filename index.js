
const express = require('express');

const {json} = require('body-parser');

const port = 3005;

const messages = [];


var app = express();

app.use(express.static('assets'))
app.use(json())


app.get('/messages', (req, res, next) => {
    res.status(200).json({ messages: messages })
    //^ what does this do?
})

app.post('/messages', (req, res, next) => {
    console.log("req.body: ", req.body)
    messages.push({message: req.body.message, 
                      time: new Date(), 
                      user: req.body.user});
    res.status(200).json({ messages })
    console.log("index.js: ", messages)
})

app.listen(port, function(){
    console.log(`listening on ${port}`)
})