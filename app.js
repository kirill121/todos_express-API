const express = require('express')
const app = express()
const todoRoutes = require('./routes/todos')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('ORFLOLRFOLRFOL')
})

app.use('/api/todos', todoRoutes)

app.listen(process.env.PORT, function(){
    console.log('app is running on ' + process.env.PORT)
})