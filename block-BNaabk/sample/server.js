var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3k')
})