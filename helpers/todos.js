var db = require('../models/app')

exports.getTodos = function(req, res){
    db.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.createTodo = function(req, res){
    db.create(req.body)
    .then(function(newTodo){
        res.json(newTodo)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.findTodo = function(req, res){
    db.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateTodo = function(req, res){
    db.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteTodo = function(req, res){
    db.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted the request'})
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;