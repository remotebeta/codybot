var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codybot');

var messageSchema = mongoose.Schema({
  type: String,
  channel: String,
  user: String,
  text: String,
  ts: String, // TimeStamp
  team: String
});

var Message = mongoose.model('Message', messageSchema);

var rejectionSchema = mongoose.Schema({
  companyName: String,
  user: String
});

var Rejection = mongoose.model('Rejection', rejectionSchema);

module.exports.Message = Message;
module.exports.Rejection = Rejection;
module.exports.ids = [];

