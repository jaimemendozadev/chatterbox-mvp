const db = require('./db.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PublicChatRoomSchema = new Schema({
    message: String,
    date: String,
    username: {type: String, unique: true, lowercase: true},
});

module.exports = mongoose.model('PublicChatRoom', PublicChatRoomSchema );
