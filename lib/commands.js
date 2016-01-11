'use strict';

var mongoose = require('mongoose');

var Rejection = mongoose.model('Rejection');

exports.reject = reject;

function reject(args, message) {
  var companyName = args[0];
  console.log(message._client.users[message.user].real_name, " was rejected from ", companyName)
}
