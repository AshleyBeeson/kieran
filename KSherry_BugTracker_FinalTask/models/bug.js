//bug schema for mongoose
//import mongoose and declare a schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
var actionSchema = new Schema({
	 user :  {
		type:String,
	},
 dateCreated :{
		type:String,
	},
 action :  {
		type:String
	}
});*/

var bugSchema = new Schema({
	id:{
		type:Number,
	},
	issueId :  {
		type:String,
	},
	dateCreated :{
		type:String,
	},
	summary :  {
		type:String,
	},
	description :  {
		type:String,
	},
	highPriority : {
		type:String,
	},
	severity : {
		type:String,
	},
	reporter :  {
		type:String,
	},
	assignedUser : {
		type:String,
	}, 
	actions : {
		type:Array,
	},
	status :  {
		type:String
	}
	
});

const bugModel = mongoose.model("bug", bugSchema);
module.exports = bugModel;