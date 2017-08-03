//import express and express.Router
const express = require('express');
const router = express.Router();

//import mongoose model
const Bug = require('../models/bug.js');

//get list from the database: READ
router.get('/bugs', function(req,res,next){
	Bug.find({}).then(function(post){
		res.send(post);
	});
});

//add a new item:: CREATE
router.post('/bugs', function(req,res,next){
	Bug.create(req.body).then(function(post){
		res.send(post);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/bugs/:id', function(req,res,next){
	Bug.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Bug.findOne({_id: req.params.id}).then(function(post){
			res.send(post);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/bugs/:id', function(req,res,next){
	Bug.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
});
module.exports = router;